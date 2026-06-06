using api.Dtos.Stock;
using api.Interfaces;
using api.Models;
using Newtonsoft.Json;

namespace api.Service
{
    public class FinnhubService : IFMPService
    {
        private HttpClient _httpClient;
        private IConfiguration _config;

        public FinnhubService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }

        public async Task<Stock?> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync(
                    $"https://finnhub.io/api/v1/stock/profile2?symbol={symbol}&token={_config["FinnhubKey"]}"
                );

                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var profile = JsonConvert.DeserializeObject<FinnhubProfile>(content);

                    if (profile != null && !string.IsNullOrEmpty(profile.Ticker))
                    {
                        return new Stock
                        {
                            Symbol = profile.Ticker,
                            CompanyName = profile.Name,
                            Industry = profile.FinnhubIndustry,
                            MarketCap = (long)(profile.MarketCapitalization * 1_000_000)
                        };
                    }
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}