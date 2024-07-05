import reflex as rx
from reflex.constants import LogLevel

config = rx.Config(
    app_name="official_website",
    # Set the log level (Default is LogLevel.INFO.)
    loglevel=LogLevel.DEBUG,
    # Disable telemetry (Opt-out of Reflex's telemetry system. Default is True.)
    telemetry_enabled=False,
)
