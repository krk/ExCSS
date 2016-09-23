using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class CharacterSetRule : RuleSet
    {
        public CharacterSetRule() 
        {
            RuleType = RuleType.Charset;
        }

        public string Encoding { get; internal set; }

        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            sb.Append("@charset '");
            sb.Append(Encoding);
            sb.Append("';");
        }
    }
}
