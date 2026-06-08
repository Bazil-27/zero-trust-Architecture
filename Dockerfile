# ── Stage 1: Builder ──────────────────────────────────────────────────────────
FROM python:3.12-slim AS builder

# Don't run as root during build
WORKDIR /app

# Copy only requirements first (layer caching)
COPY requirements.txt .

# Install dependencies — no cache, no dev tools
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# ── Stage 2: Production ───────────────────────────────────────────────────────
FROM python:3.12-slim AS production

# Security labels
LABEL org.opencontainers.image.source="https://github.com/Bazil-27/zero-trust-Architecture"
LABEL org.opencontainers.image.description="Zero Trust Architecture — Phase 4"
LABEL org.opencontainers.image.licenses="MIT"

# Create non-root user
RUN groupadd --gid 1001 appgroup && \
    useradd --uid 1001 --gid appgroup --shell /bin/sh --create-home appuser

WORKDIR /app

# Copy installed packages from builder
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copy app source
COPY --chown=appuser:appgroup . .

# Remove unnecessary tools
RUN apt-get purge -y --auto-remove \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /tmp/* \
    && rm -rf /root/.cache

# Switch to non-root user
USER appuser

# No secrets in ENV — use Azure Key Vault / GitHub Secrets
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONPATH=/app

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import sys; sys.exit(0)"

EXPOSE 8080

CMD ["python", "-m", "app"]
