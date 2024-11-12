package Graduated.Task.C2C.Category;

import Graduated.Task.C2C.Category.Dto.categoryPriceDto;
import Graduated.Task.C2C.Category.Dto.priceFindDto;
import Graduated.Task.C2C.Category.Service.CategoryService;
import Graduated.Task.C2C.Item.Dto.ItemDto;
import Graduated.Task.C2C.Item.Service.ItemService;
import Graduated.Task.C2C.User.responseDto.TokenDto;
import Graduated.Task.C2C.core.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class categoryController {
    private final CategoryService categoryService;
    @PostMapping("/recommended-price")
    public ResponseEntity<?> getCategoryPrice(@RequestBody priceFindDto priceFindDto){
        categoryPriceDto categoryPrice = categoryService.findCategoryPrice(priceFindDto.getCategory(), priceFindDto.getItemState());
        Message<categoryPriceDto> message = Message.of(200, categoryPrice);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
