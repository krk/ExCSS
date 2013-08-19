﻿using System;
using ExCSS.Model;

namespace ExCSS
{
    public sealed class CharacterSetRule : RuleSet
    {
        internal CharacterSetRule(StyleSheetContext context) : base(context)
        {
            RuleType = RuleType.Charset;
        }

        public string Encoding { get; internal set; }

        public override string ToString()
        {
            return String.Format("@charset '{0}';", Encoding);
        }
    }
}
