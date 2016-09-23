using System;
using ExCSS.Model;
using ExCSS.Model.Extensions;
using System.Text;
using Shaman.Runtime;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class StyleRule : RuleSet, ISupportsSelector, ISupportsDeclarations
    {
        private BaseSelector _selector;
        private readonly StyleDeclaration _declarations;

        public StyleRule() : this( new StyleDeclaration())
        {}

        public StyleRule(StyleDeclaration declarations) 
        {
            RuleType = RuleType.Style;
            _declarations = declarations;
        }

        public BaseSelector Selector
        {
            get { return _selector; }
            set
            {
                _selector = value;
            }
        }

        public string Value
        {
            get { return _selector.ToString(); }
            set
            {
                _selector = Parser.ParseSelector(value);
            }
        }

        public StyleDeclaration Declarations
        {
            get { return _declarations; }
        }

        
        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            _selector.ToString(sb);
            sb.Append('{');
            _declarations.ToString(sb, friendlyFormat, indentation);
            sb.NewLineIndent("}", friendlyFormat, indentation);
        }
    }
}
