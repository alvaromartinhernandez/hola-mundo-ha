"""Hola Mundo integration."""
import logging

_LOGGER = logging.getLogger(__name__)

async def async_setup(hass, config):
    """Set up the Hola Mundo component."""
    # Register the card resource
    hass.http.register_static_path(
        "/hola-mundo-card.js",
        hass.config.path("custom_components/hola_mundo/hola-mundo-card.js"),
        True
    )
    
    # Add to Lovelace resources automatically
    await hass.services.async_call(
        "lovelace",
        "add_resource",
        {"url": "/hola-mundo-card.js", "resource_type": "module"},
        blocking=True
    )
    
    _LOGGER.info("Hola Mundo card installed successfully!")
    return True