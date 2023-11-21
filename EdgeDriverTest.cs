using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace EdgeDriverTest
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = @"C:\Users\Computer\Desktop\WebTests";
        private const string siteUrl = "https://jorgen-son-of-karl.github.io/ToDo/";
        private EdgeDriver browser;

        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            // We want to go to the same URL for all tests.
            browser.Url = siteUrl;
        }

        [TestMethod]
        public void AddTask()
        {
            // Lägg till en anteckning och bekräfta att den visas på sidan.

            var formInput = browser.FindElementById("todoInput");
            formInput.SendKeys("1" + Keys.Enter);
            var listItem = browser.FindElementsByClassName("listItem");
            Assert.AreEqual(listItem[0].Text, "1");
        }

        [TestMethod]
        public void TasksLeft()
        {

            // Lägg till en anteckning och bekräfta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekräfta att sidan visar "0 items left".

            var formInput = browser.FindElementById("todoInput");
            formInput.SendKeys("1" + Keys.Enter);
            var output = browser.FindElementsById("output");
            Assert.AreEqual(output[0].Text, "1 items left");

            var checkBox = browser.FindElementsById("1");
            checkBox[0].Click();

            Assert.AreEqual(output[0].Text, "0 items left");
        }

        [TestMethod]
        public void MultipleTasksLeft()
        {
            // Lägg till 3 anteckningar, kryssa i en av dem och bekräfta att sidan visar "2 items left".

            var formInput = browser.FindElementById("todoInput");
            formInput.SendKeys("1" + Keys.Enter);
            formInput.SendKeys("2" + Keys.Enter);
            formInput.SendKeys("3" + Keys.Enter);

            var checkBox = browser.FindElementsById("1");
            checkBox[0].Click();

            var output = browser.FindElementsById("output");
            Assert.AreEqual(output[0].Text, "2 items left");
        }

        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }
}
