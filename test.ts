const rbracket = /\[\]$/;

var isFunction = function isFunction(obj) {
  // Support: Chrome <=57, Firefox <=52
  // In some browsers, typeof returns "function" for HTML <object> elements
  // (i.e., `typeof document.createElement( "object" ) === "function"`).
  // We don't want to classify *any* DOM node as a function.
  // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
  // Plus for old WebKit, typeof returns "function" for HTML collections
  // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
  return typeof obj === "function" && typeof obj.nodeType !== "number" &&
    typeof obj.item !== "function";
};


var isWindow = function isWindow(obj) {
  return obj != null && obj === obj.window;
};

var class2type = {};
function toType(obj) {
  if (obj == null) {
    return obj + "";
  }

  // Support: Android <=2.3 only (functionish RegExp)
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[toString.call(obj)] || "object" :
    typeof obj;
}

function isArrayLike(obj) {
  // Support: real iOS 8.2 only (not reproducible in simulator)
  // `in` check used to prevent JIT error (gh-2145)
  // hasOwn isn't used here due to false negatives
  // regarding Nodelist length in IE
  var length = !!obj && "length" in obj && obj.length,
    type = toType(obj);

  if (isFunction(obj) || isWindow(obj)) {
    return false;
  }

  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && (length - 1) in obj;
}

function each(obj, callback) {
  let length, i: any = 0;

  if (isArrayLike(obj)) {
    length = obj.length;
    for (; i < length; i++) { if (callback.call(obj[i], i, obj[i]) === false) { break; } }
  } else {
    for (i in obj) {
      if
        (callback.call(obj[i], i, obj[i]) === false) { break; }
    }
  } return obj;
}

function buildParams(prefix, obj, traditional, add) {
  var name;

  if (Array.isArray(obj)) {
    // Serialize array item.
    each(obj, function (i, v) {
      if (traditional || rbracket.test(prefix)) {
        // Treat each array item as a scalar.
        add(prefix, v);

      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(
          prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
          v,
          traditional,
          add
        );
      }
    });

  } else if (!traditional && toType(obj) === "object") {
    // Serialize object item.
    for (name in obj) {
      buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
    }

  } else {
    // Serialize scalar item.
    add(prefix, obj);
  }
}

