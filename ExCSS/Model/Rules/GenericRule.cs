using System.Linq;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class GenericRule : AggregateRule
    {
        private string _text;
        private bool _stopped;

        internal void SetInstruction(string text)
        {
            _text = text;
            _stopped = true;
        }

        internal void SetCondition(string text)
        {
            _text = text;
            _stopped = false;
        }

        
        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            if (_stopped)
            {
                sb.Append(_text);
                sb.Append(';');
                return;
            }

            sb.Append(_text);
            sb.Append('{');
            RuleSetsToString(sb, false, 0);
            sb.Append('}');
        }
    }
}
