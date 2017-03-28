
using System;
using System.Text;
using ExCSS.Tests.Properties;
using NUnit.Framework;

namespace ExCSS.Tests
{
    [TestFixture]
    public class RenderFormatFixture
    {
        [Test]
		[Ignore]
        public void Stylesheet_Renders_Inline()
        {
            var parser = new Parser();
       
            var css = parser.Parse(Resources.Css3);

            Assert.AreEqual(Resources.Css3Min, css.ToString());
        }

        [Test]
		[Ignore]
        public void Stylesheet_Renders_Friendly_Format()
        {
            var parser = new Parser();
            var css = parser.Parse(Resources.Css3);

			var result = new StringBuilder();

			css.ToString(result, true);

			Assert.AreEqual(Resources.Css3Friendly, result.ToString());
        }
    }
}
