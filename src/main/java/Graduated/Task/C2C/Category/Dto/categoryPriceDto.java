package Graduated.Task.C2C.Category.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class categoryPriceDto {
    private int recommendedMinPrice;
    private int recommendedMaxPrice;
}
