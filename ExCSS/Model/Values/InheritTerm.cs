using System;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS
{
    public class InheritTerm : Term
    {
        internal InheritTerm()
        {
        }

        public override void ToString(StringBuilder sb)
        {
            sb.Append( "inherit");
        }
    }
}

