    package Graduated.Task.C2C.Category.Entity;

    import Graduated.Task.C2C.Item.Entity.Item;
    import Graduated.Task.C2C.core.BaseEntity;
    import jakarta.persistence.*;
    import lombok.AccessLevel;
    import lombok.Getter;
    import lombok.NoArgsConstructor;

    import java.util.ArrayList;
    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;

    @Entity // 이 클래스 데이터베이스 테이블과 연결
    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)


    public class Category extends BaseEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="categoryNo")
        private Long No;
        @OneToMany(mappedBy = "category")
        private List<Item> item = new ArrayList<>();
        private String name;

        @OneToMany(mappedBy = "category")
        private List<categoryPrice> categoryPrices = new ArrayList<>();
    }
