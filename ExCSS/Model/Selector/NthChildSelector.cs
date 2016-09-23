
// ReSharper disable once CheckNamespace
using Shaman.Runtime;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS
{
    internal abstract class NthChildSelector : BaseSelector
    {
        public int Step;
        public int Offset;
        internal string FunctionText { get; set; }

        internal void FormatSelector(StringBuilder sb, string functionName)
        {
            sb.Append(':');
            sb.Append(functionName);
            sb.Append('(');

            if (string.IsNullOrEmpty(FunctionText))
            {
                sb.AppendFast(Step);
                sb.Append('n');

                if (Offset >= 0) sb.Append('+');
                
                sb.AppendFast(Offset);
            }
            else
            {
                sb.Append(FunctionText);
            }
            sb.Append(')');


        }

        public abstract override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0);
    }
}