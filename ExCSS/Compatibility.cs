#if SALTARELLE
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Saltarelle;
using StringBuilder = System.Text.Saltarelle.StringBuilder;

namespace Shaman.Runtime
{
    internal static class ReseekableStringBuilder
    {
        internal static StringBuilder AcquirePooledStringBuilder()
        {
            return new StringBuilder();
        }

        internal static string GetValueAndRelease(StringBuilder sb)
        {
            return sb.ToString();
        }

        internal static void Release(StringBuilder p)
        {
        }
    }
    internal static class CompatibilityExtensions
    {
        public static void AppendFast(this StringBuilder sb, int val)
        {
            sb.Append(val);
        }
    }
}
#endif