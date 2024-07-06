import reflex as rx

from official_website.meta import DESCRIPTION


@rx.page(route="/product", title="Wenke Studio", description=DESCRIPTION)
def product() -> rx.Component:
    return rx.center(rx.text("Product"))
