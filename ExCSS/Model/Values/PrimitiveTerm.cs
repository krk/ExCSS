﻿using System;
using System.Globalization;
using System.Text;

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class PrimitiveTerm : Term
    {
        public object Value { get; set; }
        public UnitType PrimitiveType { get; set; }

        public PrimitiveTerm(UnitType unitType, string value)
        {
            PrimitiveType = unitType;
            Value = value;
        }

        public PrimitiveTerm(UnitType unitType, Single value)
        {
            PrimitiveType = unitType;
            Value = value;
        }

        public PrimitiveTerm(string unit, Single value)
        {
            PrimitiveType = ConvertStringToUnitType(unit);;
            Value = value;
        }

        public Single? GetFloatValue(UnitType unit)
        {
            if (!(Value is Single))
            {
                return null;
            }

            var quantity = (Single)Value;

            switch (unit)
            {
                case UnitType.Percentage:
                    quantity = quantity / 100f;
                    break;
            }

            return quantity;
        }

        public override void ToString(StringBuilder sb)
        {
            switch (PrimitiveType)
            {
                case UnitType.String:
                    sb.Append('\'');
                    sb.Append(Value);
                    sb.Append('\'');
                    return;

                case UnitType.Uri:
                    sb.Append("url(");
                    sb.Append(Value);
                    sb.Append(')');
                    return;

                default:
                    if (Value is Single)
                    {
#if SALTARELLE
                        sb.Append(((Single)Value).ToString());
#else
                        sb.Append(((Single)Value).ToString(CultureInfo.InvariantCulture));

#endif
                        sb.Append(ConvertUnitTypeToString(PrimitiveType));
                        return;
                    }
                    sb.Append(Value);
                    return;
            }
        }

        internal static UnitType ConvertStringToUnitType(string unit)
        {
            switch (unit)
            {
                case "%":
                    return UnitType.Percentage;
                case "em":
                    return UnitType.Ems;
                case "cm":
                    return UnitType.Centimeter;
                case "deg":
                    return UnitType.Degree;
                case "grad":
                    return UnitType.Grad;
                case "rad":
                    return UnitType.Radian;
                case "turn":
                    return UnitType.Turn;
                case "ex":
                    return UnitType.Exs;
                case "hz":
                    return UnitType.Hertz;
                case "in":
                    return UnitType.Inch;
                case "khz":
                    return UnitType.KiloHertz;
                case "mm":
                    return UnitType.Millimeter;
                case "ms":
                    return UnitType.Millisecond;
                case "s":
                    return UnitType.Second;
                case "pc":
                    return UnitType.Percent;
                case "pt":
                    return UnitType.Point;
                case "px":
                    return UnitType.Pixel;
                case "vw":
                    return UnitType.ViewportWidth;
                case "vh":
                    return UnitType.ViewportHeight;
                case "vmin":
                    return UnitType.ViewportMin;
                case "vmax":
                    return UnitType.ViewportMax;
            }

            return UnitType.Unknown;
        }

        internal static string ConvertUnitTypeToString(UnitType unit)
        {
            switch (unit)
            {
                case UnitType.Percentage:
                    return "%";
                case UnitType.Ems:
                    return "em";
                case UnitType.Centimeter:
                    return "cm";
                case UnitType.Degree:
                    return "deg";
                case UnitType.Grad:
                    return "grad";
                case UnitType.Radian:
                    return "rad";
                case UnitType.Turn:
                    return "turn";
                case UnitType.Exs:
                    return "ex";
                case UnitType.Hertz:
                    return "hz";
                case UnitType.Inch:
                    return "in";
                case UnitType.KiloHertz:
                    return "khz";
                case UnitType.Millimeter:
                    return "mm";
                case UnitType.Millisecond:
                    return "ms";
                case UnitType.Second:
                    return "s";
                case UnitType.Percent:
                    return "pc";
                case UnitType.Point:
                    return "pt";
                case UnitType.Pixel:
                    return "px";
                case UnitType.ViewportWidth:
                    return "vw";
                case UnitType.ViewportHeight:
                    return "vh";
                case UnitType.ViewportMin:
                    return "vmin";
                case UnitType.ViewportMax:
                    return "vmax";
            }

            return string.Empty;
        }
    }
}
