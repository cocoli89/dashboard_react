/** AUTOGENERATED (yarn scan-widgets) **/
import { WidgetProperties } from "./index";

export default {
  counter: {
    configurable: true,
    widgetType: "counter",
    category: "tracking",
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: { headline: "" },
    initialMeta: {}
  },
  cryptocurrencies: {
    configurable: true,
    widgetType: "cryptocurrencies",
    category: "monitoring",
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: { fiat: "eur", crypto: "bitcoin" },
    initialMeta: { updateCycle: { minutes: 15 } }
  },
  "date-time": {
    configurable: false,
    widgetType: "date-time",
    category: "general",
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: {},
    initialMeta: {}
  },
  image: {
    configurable: true,
    widgetType: "image",
    category: "media",
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: { url: "" },
    initialMeta: {}
  },
  "qr-code": {
    configurable: true,
    widgetType: "qr-code",
    category: "tools",
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: { headline: "", content: "" },
    initialMeta: {}
  },
  search: {
    configurable: true,
    widgetType: "search",
    category: "tools",
    initialHeight: 2,
    initialWidth: 4,
    initialOptions: {
      title: "DuckDuckGo",
      pattern: "https://duckduckgo.com/?q=%s"
    },
    initialMeta: {}
  },
  text: {
    configurable: false,
    widgetType: "text",
    category: "general",
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: {},
    initialMeta: {}
  },
  "totd-chemical-elements": {
    configurable: false,
    widgetType: "totd-chemical-elements",
    category: "knowledge",
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: {},
    initialMeta: { updateCycle: { hours: 24 } }
  },
  website: {
    configurable: true,
    widgetType: "website",
    category: "media",
    initialHeight: 5,
    initialWidth: 5,
    initialOptions: { url: "" },
    initialMeta: {}
  }
} as { [key: string]: WidgetProperties };
