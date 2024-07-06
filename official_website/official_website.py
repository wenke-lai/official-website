"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from official_website.pages import *  # noqa: F403, Import all pages to register them.

app = rx.App(
    theme=rx.theme(
        appearance="dark",
        has_background=True,
    ),
    stylesheets=[
        "/default.css",
    ],
)
