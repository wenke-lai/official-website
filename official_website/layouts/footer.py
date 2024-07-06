import reflex as rx


def footer(*children: list[rx.Component]) -> rx.Component:
    return rx.container(
        *children,
        class_name="min-h-16",
        size="4",
    )
