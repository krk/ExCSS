using ExCSS.Model;
using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class KeyframeRule : RuleSet, ISupportsDeclarations
    {
        private string _value;

        public KeyframeRule()
        {
            Declarations = new StyleDeclaration();
            RuleType = RuleType.Keyframe;
        }

        public string Value
        {
            get { return _value; }
            set { _value = value; }
        }

        public StyleDeclaration Declarations { get; private set; }

        

        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.Indent(string.Empty, friendlyFormat, indentation);
            sb.Append(_value);
            sb.Append('{');
            Declarations.ToString(sb, friendlyFormat, indentation);
            sb.NewLineIndent("}", friendlyFormat, indentation);
        }
    }
}
