using ExCSS.Model.Extensions;
using System.Text;
// ReSharper disable once CheckNamespace
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS
{
    public class NamespaceRule : RuleSet
    {
        public NamespaceRule() 
        {
            RuleType = RuleType.Namespace;
        }

        public string Uri { get; set; }

        public string Prefix { get; set; }

        
        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            if (string.IsNullOrEmpty(Prefix))
            {
                sb.Append("@namespace '");
                sb.Append(Uri);
                sb.Append("';");
            }
            else {
                sb.Append("@namespace ");
                sb.Append(Prefix);
                sb.Append(" '");
                sb.Append(Uri);
                sb.Append("';");
            }
        }
    }
}
