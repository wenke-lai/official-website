import reflex as rx


def header(*children: list[rx.Component]) -> rx.Component:
    return rx.container(
        rx.hstack(*children, justify="between", align="center"),
        class_name="absolute top-0 inset-x-0 h-16",
    )
