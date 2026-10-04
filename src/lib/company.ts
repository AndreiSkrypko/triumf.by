export const COMPANY = {
  name: "Triumph Auto Service",
  phone: "+375 25 696-66-80",
  phoneHref: "tel:+375256966680",
  address: "г. Минск, ул. Октябрьская, 16к2",
  /** Как в реквизитах для клиента */
  addressLine: "Минск, Октябрьская улица, 16к2",
  unp: "193855083",
  email: "info@triumph-auto.by",
  warrantyShort: "3 года",
  prices: {
    anticorFromByn: 600,
    usaSelectionByn: 400,
    fullPaintFromByn: 9000,
    mechanicalFromByn: 50,
    bodyRepairFromByn: 300,
    straighteningFromByn: 300,
    geometryFromByn: 900,
    partsRepairFromByn: 300,
    weldingFromByn: 100,
  },
} as const;
