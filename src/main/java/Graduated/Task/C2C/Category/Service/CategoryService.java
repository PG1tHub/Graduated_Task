package Graduated.Task.C2C.Category.Service;

import Graduated.Task.C2C.Category.Dto.categoryDto;
import Graduated.Task.C2C.Category.Dto.categoryPriceDto;
import Graduated.Task.C2C.Category.Entity.Category;
import Graduated.Task.C2C.Category.Entity.categoryPrice;
import Graduated.Task.C2C.Category.Repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CategoryService {
    private final CategoryRepository categoryRepository;


    public List<categoryDto> findCategory(){
        return categoryRepository.findAll().stream().map(this::getCategoryDto).toList();
    }

    private categoryDto getCategoryDto(Category category) {
        return new categoryDto(category.getNo(), category.getName());
    }
    public categoryPriceDto findCategoryPrice(String name, int status){
        categoryPrice categoryPriceByName = categoryRepository.findCategoryPriceByName(name, status).orElseThrow(() -> new NullPointerException("존재하지 않는 카테고리입니다"));
        return new categoryPriceDto(categoryPriceByName.getMinPrice(),categoryPriceByName.getMaxPrice());
    }

}
