
// ReSharper disable once CheckNamespace
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS
{
    internal sealed class NthFirstChildSelector : NthChildSelector
    {
        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            FormatSelector(sb, PseudoSelectorPrefix.PseudoFunctionNthchild);
        }
    }
}