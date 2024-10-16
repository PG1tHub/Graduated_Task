package Graduated.Task.C2C.Category.Entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class categoryPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // status 매핑: 새상품 -> 5, 사용감 없음 -> 4, 사용감 적음 -> 3, 사용감 많은 -> 2, 중고 -> 2, 고장/파손 상품 -> -1
    private int status;
    private int maxPrice;
    private int minPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="categoryNo")
    private Category category;
}
