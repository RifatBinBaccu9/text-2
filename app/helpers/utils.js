import dayjs from "dayjs";
import { useUser } from "../contexts/user";
import { Tooltip } from "antd";
import { useI18n } from "../providers/i18n";

export const statusClass = {
  'Under Approval': 'status-warning',
  'Approved': 'status-success',
  true: 'status-success',
  false: 'status-danger',
  'active': 'status-success',
  'inactive': 'status-danger',
  'Rejected': 'status-danger',
  'suspended': 'status-danger',
  'pending': 'status-warning',
  'approved': 'status-success',
  'rejected': 'status-danger',
  'processing': 'status-info',
  'confirmed': 'status-warning',
  'arrived': 'status-info',
  'ongoing': 'status-info',
  'completed': 'status-success',
  'complete': 'status-success',
  'cancelled': 'status-danger',
  'disabled': 'status-danger',
  'failed': 'status-danger',
  'on-hold': 'status-warning',
  'accepted': 'status-info',
  'started': 'status-success',
  'add_money': 'status-success',
  'paid': 'status-success',
  'unpaid': 'status-danger',
  'deposit': 'status-success',
  'expense': 'status-danger',
}
export const getStatusClass = (status) => {
  return statusClass[status] || 'status-default';
};


export const rideStatusClass = {
  'pending': 'status-warning',
  'accepted': 'status-success',
  'started': 'status-info',
  'arrived': 'status-info',
  'completed': 'status-success',
  'cancelled': 'status-danger',
  'ride_type': 'status-secondary ',
  'confirmed': 'status-info',
}

export const currencyOptions = [
  { label: "AED - United Arab Emirates Dirham", value: "AED" },
  { label: "AFN - Afghan Afghani", value: "AFN" },
  { label: "ALL - Albanian Lek", value: "ALL" },
  { label: "AMD - Armenian Dram", value: "AMD" },
  { label: "ANG - Netherlands Antillean Guilder", value: "ANG" },
  { label: "AOA - Angolan Kwanza", value: "AOA" },
  { label: "ARS - Argentine Peso", value: "ARS" },
  { label: "AUD - Australian Dollar", value: "AUD", symbol: "$" },
  { label: "AWG - Aruban Florin", value: "AWG" },
  { label: "AZN - Azerbaijani Manat", value: "AZN" },
  { label: "BAM - Bosnia-Herzegovina Convertible Mark", value: "BAM" },
  { label: "BBD - Barbadian Dollar", value: "BBD", symbol: "$" },
  { label: "BDT - Bangladeshi Taka", value: "BDT" },
  { label: "BGN - Bulgarian Lev", value: "BGN" },
  { label: "BHD - Bahraini Dinar", value: "BHD" },
  { label: "BIF - Burundian Franc", value: "BIF" },
  { label: "BMD - Bermudian Dollar", value: "BMD", symbol: "$" },
  { label: "BND - Brunei Dollar", value: "BND", symbol: "$" },
  { label: "BOB - Bolivian Boliviano", value: "BOB" },
  { label: "BRL - Brazilian Real", value: "BRL", symbol: "R$" },
  { label: "BSD - Bahamian Dollar", value: "BSD", symbol: "$" },
  { label: "BTN - Bhutanese Ngultrum", value: "BTN" },
  { label: "BWP - Botswanan Pula", value: "BWP" },
  { label: "BYN - Belarusian Ruble", value: "BYN" },
  { label: "BZD - Belize Dollar", value: "BZD", symbol: "$" },
  { label: "CAD - Canadian Dollar", value: "CAD", symbol: "$" },
  { label: "CDF - Congolese Franc", value: "CDF" },
  { label: "CHF - Swiss Franc", value: "CHF" },
  { label: "CLP - Chilean Peso", value: "CLP", symbol: "$" },
  { label: "CNY - Chinese Yuan", value: "CNY", symbol: "¥" },
  { label: "COP - Colombian Peso", value: "COP", symbol: "$" },
  { label: "CRC - Costa Rican Colón", value: "CRC" },
  { label: "CUP - Cuban Peso", value: "CUP", symbol: "$" },
  { label: "CVE - Cape Verdean Escudo", value: "CVE" },
  { label: "CZK - Czech Republic Koruna", value: "CZK" },
  { label: "DJF - Djiboutian Franc", value: "DJF" },
  { label: "DKK - Danish Krone", value: "DKK" },
  { label: "DOP - Dominican Peso", value: "DOP", symbol: "RD$" },
  { label: "DZD - Algerian Dinar", value: "DZD" },
  { label: "EGP - Egyptian Pound", value: "EGP" },
  { label: "ERN - Eritrean Nakfa", value: "ERN" },
  { label: "ETB - Ethiopian Birr", value: "ETB" },
  { label: "EUR - Euro", value: "EUR", symbol: "€" },
  { label: "FJD - Fijian Dollar", value: "FJD", symbol: "$" },
  { label: "FKP - Falkland Islands Pound", value: "FKP" },
  { label: "FOK - Faroese Króna", value: "FOK" },
  { label: "GBP - British Pound Sterling", value: "GBP", symbol: "£" },
  { label: "GEL - Georgian Lari", value: "GEL" },
  { label: "GGP - Guernsey Pound", value: "GGP" },
  { label: "GHS - Ghanaian Cedi", value: "GHS" },
  { label: "GIP - Gibraltar Pound", value: "GIP" },
  { label: "GMD - Gambian Dalasi", value: "GMD" },
  { label: "GNF - Guinean Franc", value: "GNF" },
  { label: "GTQ - Guatemalan Quetzal", value: "GTQ" },
  { label: "GYD - Guyanaese Dollar", value: "GYD", symbol: "$" },
  { label: "HKD - Hong Kong Dollar", value: "HKD", symbol: "$" },
  { label: "HNL - Honduran Lempira", value: "HNL" },
  { label: "HRK - Croatian Kuna", value: "HRK" },
  { label: "HTG - Haitian Gourde", value: "HTG" },
  { label: "HUF - Hungarian Forint", value: "HUF" },
  { label: "IDR - Indonesian Rupiah", value: "IDR" },
  { label: "ILS - Israeli New Sheqel", value: "ILS", symbol: "₪" },
  { label: "IMP - Isle of Man Pound", value: "IMP" },
  { label: "INR - Indian Rupee", value: "INR", symbol: "₹" },
  { label: "IQD - Iraqi Dinar", value: "IQD" },
  { label: "IRR - Iranian Rial", value: "IRR" },
  { label: "ISK - Icelandic Króna", value: "ISK" },
  { label: "JEP - Jersey Pound", value: "JEP" },
  { label: "JMD - Jamaican Dollar", value: "JMD", symbol: "$" },
  { label: "JOD - Jordanian Dinar", value: "JOD" },
  { label: "JPY - Japanese Yen", value: "JPY", symbol: "¥" },
  { label: "KES - Kenyan Shilling", value: "KES" },
  { label: "KGS - Kyrgystani Som", value: "KGS" },
  { label: "KHR - Cambodian Riel", value: "KHR" },
  { label: "KID - Kiribati Dollar", value: "KID" },
  { label: "KMF - Comorian Franc", value: "KMF" },
  { label: "KRW - South Korean Won", value: "KRW", symbol: "₩" },
  { label: "KWD - Kuwaiti Dinar", value: "KWD" },
  { label: "KYD - Cayman Islands Dollar", value: "KYD", symbol: "$" },
  { label: "KZT - Kazakhstani Tenge", value: "KZT" },
  { label: "LAK - Laotian Kip", value: "LAK" },
  { label: "LBP - Lebanese Pound", value: "LBP" },
  { label: "LKR - Sri Lankan Rupee", value: "LKR" },
  { label: "LRD - Liberian Dollar", value: "LRD", symbol: "$" },
  { label: "LSL - Lesotho Loti", value: "LSL" },
  { label: "LYD - Libyan Dinar", value: "LYD" },
  { label: "MAD - Moroccan Dirham", value: "MAD" },
  { label: "MDL - Moldovan Leu", value: "MDL" },
  { label: "MGA - Malagasy Ariary", value: "MGA" },
  { label: "MKD - Macedonian Denar", value: "MKD" },
  { label: "MMK - Myanmar Kyat", value: "MMK" },
  { label: "MNT - Mongolian Tugrik", value: "MNT" },
  { label: "MOP - Macanese Pataca", value: "MOP" },
  { label: "MRU - Mauritanian Ouguiya", value: "MRU" },
  { label: "MUR - Mauritian Rupee", value: "MUR" },
  { label: "MVR - Maldivian Rufiyaa", value: "MVR" },
  { label: "MWK - Malawian Kwacha", value: "MWK" },
  { label: "MXN - Mexican Peso", value: "MXN", symbol: "$" },
  { label: "MYR - Malaysian Ringgit", value: "MYR" },
  { label: "MZN - Mozambican Metical", value: "MZN" },
  { label: "NAD - Namibian Dollar", value: "NAD", symbol: "$" },
  { label: "NGN - Nigerian Naira", value: "NGN", symbol: "₦" },
  { label: "NIO - Nicaraguan Córdoba", value: "NIO" },
  { label: "NOK - Norwegian Krone", value: "NOK" },
  { label: "NPR - Nepalese Rupee", value: "NPR" },
  { label: "NZD - New Zealand Dollar", value: "NZD", symbol: "$" },
  { label: "OMR - Omani Rial", value: "OMR" },
  { label: "PAB - Panamanian Balboa", value: "PAB" },
  { label: "PEN - Peruvian Nuevo Sol", value: "PEN" },
  { label: "PGK - Papua New Guinean Kina", value: "PGK" },
  { label: "PHP - Philippine Peso", value: "PHP", symbol: "₱" },
  { label: "PKR - Pakistani Rupee", value: "PKR" },
  { label: "PLN - Polish Zloty", value: "PLN" },
  { label: "PYG - Paraguayan Guarani", value: "PYG", symbol: "₲" },
  { label: "QAR - Qatari Rial", value: "QAR" },
  { label: "RON - Romanian Leu", value: "RON" },
  { label: "RSD - Serbian Dinar", value: "RSD" },
  { label: "RUB - Russian Ruble", value: "RUB", symbol: "₽" },
  { label: "RWF - Rwandan Franc", value: "RWF" },
  { label: "SAR - Saudi Riyal", value: "SAR" },
  { label: "SBD - Solomon Islands Dollar", value: "SBD", symbol: "$" },
  { label: "SCR - Seychellois Rupee", value: "SCR" },
  { label: "SDG - Sudanese Pound", value: "SDG" },
  { label: "SEK - Swedish Krona", value: "SEK" },
  { label: "SGD - Singapore Dollar", value: "SGD", symbol: "$" },
  { label: "SHP - Saint Helena Pound", value: "SHP" },
  { label: "SLL - Sierra Leonean Leone", value: "SLL" },
  { label: "SOS - Somali Shilling", value: "SOS" },
  { label: "SRD - Surinamese Dollar", value: "SRD", symbol: "$" },
  { label: "SSP - South Sudanese Pound", value: "SSP" },
  { label: "STN - São Tomé and Príncipe Dobra", value: "STN" },
  { label: "SYP - Syrian Pound", value: "SYP" },
  { label: "SZL - Swazi Lilangeni", value: "SZL" },
  { label: "THB - Thai Baht", value: "THB", symbol: "฿" },
  { label: "TJS - Tajikistani Somoni", value: "TJS" },
  { label: "TMT - Turkmenistani Manat", value: "TMT" },
  { label: "TND - Tunisian Dinar", value: "TND" },
  { label: "TOP - Tongan Paʻanga", value: "TOP" },
  { label: "TRY - Turkish Lira", value: "TRY", symbol: "₺" },
  { label: "TTD - Trinidad and Tobago Dollar", value: "TTD", symbol: "$" },
  { label: "TVD - Tuvaluan Dollar", value: "TVD" },
  { label: "TWD - New Taiwan Dollar", value: "TWD", symbol: "NT$" },
  { label: "TZS - Tanzanian Shilling", value: "TZS" },
  { label: "UAH - Ukrainian Hryvnia", value: "UAH", symbol: "₴" },
  { label: "UGX - Ugandan Shilling", value: "UGX" },
  { label: "USD - United States Dollar", value: "USD", symbol: "$" },
  { label: "UYU - Uruguayan Peso", value: "UYU" },
  { label: "UZS - Uzbekistani Som", value: "UZS" },
  { label: "VES - Venezuelan Bolívar Soberano", value: "VES" },
  { label: "VND - Vietnamese Dong", value: "VND", symbol: "₫" },
  { label: "VUV - Vanuatu Vatu", value: "VUV" },
  { label: "WST - Samoan Tala", value: "WST" },
  { label: "XAF - CFA Franc BEAC", value: "XAF" },
  { label: "XCD - East Caribbean Dollar", value: "XCD", symbol: "$" },
  { label: "XOF - CFA Franc BCEAO", value: "XOF" },
  { label: "XPF - CFP Franc", value: "XPF" },
  { label: "YER - Yemeni Rial", value: "YER" },
  { label: "ZAR - South African Rand", value: "ZAR" },
  { label: "ZMW - Zambian Kwacha", value: "ZMW" },
  { label: "ZWL - Zimbabwean Dollar", value: "ZWL" }
];


export const getTimeFormat = seconds => {
  return seconds > 0 ? `${(seconds / 3600).toFixed(0)}:${((seconds / 60 >> 0) % 60).toString().padStart(2, '0')}` : ''
}

export const storeMyLocation = (value) => {
  return {
    type: MYLOCATION,
    payload: value
  }
}

export const hasPermissions = (name) => {
  const { user } = useUser()

  if (user?.role === "admin") {
    return true;
  } else if (name) {
    return checkPermission(name, user?.permissions)
  }
  return true
}

const crud = ['create', 'edit', 'delete', 'view'];

export const havePermission = (permission, roles = []) => {
  const permissions = crud?.map(dd => `${permission}_${dd}`) || []
  permissions.push(permission)
  for (let role of permissions || []) {
    if (roles?.length > 0 && roles?.includes(role)) {
      return true
    }
  }
  return false
}

export const checkPermission = (permission, permissions = []) => {
  if (permissions?.length > 0 && permissions?.includes(permission)) {
    return true
  }
  return false
}

export const formatFieldName = (value) => {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatToSnakeCase = (value) => {
  return value.toLowerCase().replace(/ /g, '_');
};

export const getCurrentLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        callback({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    message.error("Geolocation is not supported by this browser.");
  }
};

export const isPastDate = (date) => {
  return dayjs(date).isBefore(dayjs(), "day");
};

export const TooltipComponent = ({ value, maxValue = 30 }) => {
  return (
    value ? (
      <Tooltip title={value?.length > maxValue ? value : ""}>
        <span className="">
          {value?.length > maxValue ? value?.slice(0, maxValue) + "..." : value}
        </span>
      </Tooltip>
    ) : "N/A"
  )
}

export const formatLastSeen = (lastSeen) => {
  if (!lastSeen) return "Loading...";

  const currentTime = new Date();
  const duration = moment.duration(moment(currentTime).diff(moment(lastSeen)));

  if (duration.asSeconds() < 60) {
    return `${Math.floor(duration.asSeconds())} seconds ago`;
  } else if (duration.asMinutes() < 60) {
    return `${Math.floor(duration.asMinutes())} minutes ago`;
  } else if (duration.asHours() < 24) {
    return `${Math.floor(duration.asHours())} hours ago`;
  } else {
    return dayjs(lastSeen).format('lll');
  }
};

export const extractGMTOffset = (timezoneString) => {
  const match = timezoneString.match(/\(GMT([+-]\d{1,2}:\d{2})\)/);
  if (match) {
    let offset = match[1];
    return offset.replace(/([+-])(\d):/, '$10$2:');
  }
  return null;
}
export const noSelected = ({ form, setSelectedLang }) => {
  const data = form?.getFieldsValue();
  const emptyLanguages = new Set();

  for (let key in data) {
    for (let lang in data[key]) {
      if (!data[key][lang]) {
        emptyLanguages.add(lang);
      }
    }
  }

  if ([...emptyLanguages][0]) {
    setSelectedLang([...emptyLanguages][0]);
  }
}


export const columnFormatter = (value) => {
  const { langCode } = useI18n();
  if (value && typeof value === 'object') {
    if (langCode && value[langCode]) {
      return value[langCode];
    }
  }

}