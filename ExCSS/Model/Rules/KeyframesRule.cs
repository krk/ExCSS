using System;
using System.Collections.Generic;
using System.Linq;
using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class KeyframesRule : RuleSet, IRuleContainer
    {
        private readonly List<RuleSet> _ruleSets;
        private string _identifier;

        public KeyframesRule()
        {
            _ruleSets = new List<RuleSet>();
            RuleType = RuleType.Keyframes;
            AtRuleKeyword = "keyframes";
        }

        public string Identifier
        {
            get { return _identifier; }
            set { _identifier = value; }
        }

        //TODO change to "keyframes"
        public List<RuleSet> Declarations
        {
            get { return _ruleSets; }
        }

        
        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            

            sb.NewLineIndent(friendlyFormat, indentation);
            sb.Append('@');
            sb.Append(AtRuleKeyword);
            sb.Append(' ');
            sb.Append(_identifier);
            sb.Append('{');

            //if (friendlyFormat) sb.NewLineIndent("", true, indentation + 1);
            foreach (var r in _ruleSets)
            {
                ///if (first) first = false;
                if (friendlyFormat) sb.NewLineIndent("", friendlyFormat, indentation);
                r.ToString(sb, friendlyFormat, indentation + 1);
            }

            sb.NewLineIndent("}", friendlyFormat, indentation);                
        }

        public string AtRuleKeyword { get; set; }
    }
}
