namespace api.Dtos.Stock
{
    public class FinnhubProfile
    {
        public string Ticker { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string FinnhubIndustry { get; set; } = string.Empty;
        public decimal MarketCapitalization { get; set; }
    }
}