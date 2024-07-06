import reflex as rx


def layout(
    header: rx.Component, main: rx.Component, footer: rx.Component
) -> rx.Component:
    return rx.box(
        header,
        main,
        footer,
        class_name="relative w-full min-h-screen",
    )
