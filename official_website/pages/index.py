import reflex as rx

from official_website.layouts import footer, header, layout, main
from official_website.meta import DESCRIPTION


@rx.page(route="/", title="Wenke Studio", description=DESCRIPTION)
def index() -> rx.Component:
    return layout(
        header=header(
            rx.link("Wenke Studio", href="/", size="7"),
            rx.hstack(
                rx.link("Product", href="/product", size="5"),
                rx.link("Document", href="/document", size="5"),
                rx.link("About", href="/about", size="5"),
                spacing="5",
            ),
        ),
        main=main(
            rx.center(
                rx.text("Hello, World!"),
            ),
        ),
        footer=footer(
            rx.center(
                rx.text("Copyright © 2024 Wenke Studio. All rights reserved."),
            )
        ),
    )
