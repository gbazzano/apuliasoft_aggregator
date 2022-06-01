using ApuliaSoft.Aggregator.DAL.Context;

namespace ApuliaSoft.Aggregator.BLL.Services
{
    public abstract class BaseService
    {
        protected readonly AggregatorContext _dbContext;

        protected BaseService(AggregatorContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}