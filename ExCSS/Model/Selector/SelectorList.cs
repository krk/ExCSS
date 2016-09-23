using System.Collections;
using System.Collections.Generic;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public abstract class SelectorList : BaseSelector, IEnumerable<BaseSelector>
    {
        protected List<BaseSelector> Selectors;

        protected SelectorList()
        {
            Selectors = new List<BaseSelector>();
        }

        public int Length 
        {
            get { return Selectors.Count; } 
        }

        public BaseSelector this[int index]
        {
            get { return Selectors[index]; }
            set { Selectors[index] = value; }
        }

        public SelectorList AppendSelector(BaseSelector selector)
        {
            Selectors.Add(selector);
            return this;
        }

        public SelectorList RemoveSelector(SimpleSelector selector)
        {
            Selectors.Remove(selector);
            return this;
        }

        public SelectorList ClearSelectors()
        {
            Selectors.Clear();
            return this;
        }

        public IEnumerator<BaseSelector> GetEnumerator()
        {
            return Selectors.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return ((IEnumerable)Selectors).GetEnumerator();
        }

        public override abstract void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0);
    }
}
