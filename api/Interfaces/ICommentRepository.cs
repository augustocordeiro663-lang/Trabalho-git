using api.Dtos.Comment;
using api.Models;

namespace api.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllAsync();
        Task<Comment> CreateAsync(Comment commentModel);
        Task<Comment?> GetByIdAsync(int id);
        Task<Comment?> UpdateAsync(int id, UpdateCommentDto commentDto); 
        Task<Comment?> DeleteAsync(int id);
    }
}