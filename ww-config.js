export default {
    editor: {
        label: {
            en: "weweb-kros-tagbox",
        }
    },
    triggerEvents: [
        {
            name: "onCustomItemCreating",
            label: { en: "On custom item creating" },
            event: {},
        },
        {
            name: "onValueChanged",
            label: { en: "On value changed" },
            event: {},
        }
    ],
    inherit: {
        type: "ww-layout"
    },
    options: {
        layout: ["flex"]
    },
    properties: {
        data: {
            label: {
                en: "📦 Data"
            },
            type: "Info",
            options: {
                text: {
                    en: "Bind your data"
                }
            },
            bindable: "repeatable",
            section: "settings",
            bindingValidation: {
                validations: [
                    {
                        type: "array"
                    },
                    {
                        type: "object"
                    }
                ],
                tooltip: "An array of data ``[{...}, {...}, {...}]``, <br> or a collection."
            }
        },
        value: {
            label: {
                en: "Value"
            },
            type: "Info",
            options: {
                text: {
                    en: "Bind your value"
                }
            },
            bindable: "repeatable",
            section: "settings",
            bindingValidation: {
                validations: [
                    {
                        type: "array"
                    },
                    {
                        type: "object"
                    },
                ],
                tooltip: "An array of data ``[{...}, {...}, {...}]``, <br> or a collection."
            }

        },
        itemContainer: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: "ww-flexbox"
            }
        },
    },
};
