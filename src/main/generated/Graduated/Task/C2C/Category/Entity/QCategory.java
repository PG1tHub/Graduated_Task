package Graduated.Task.C2C.Category.Entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCategory is a Querydsl query type for Category
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCategory extends EntityPathBase<Category> {

    private static final long serialVersionUID = -138519545L;

    public static final QCategory category = new QCategory("category");

    public final Graduated.Task.C2C.core.QBaseEntity _super = new Graduated.Task.C2C.core.QBaseEntity(this);

    public final ListPath<categoryPrice, QcategoryPrice> categoryPrices = this.<categoryPrice, QcategoryPrice>createList("categoryPrices", categoryPrice.class, QcategoryPrice.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final ListPath<Graduated.Task.C2C.Item.Entity.Item, Graduated.Task.C2C.Item.Entity.QItem> item = this.<Graduated.Task.C2C.Item.Entity.Item, Graduated.Task.C2C.Item.Entity.QItem>createList("item", Graduated.Task.C2C.Item.Entity.Item.class, Graduated.Task.C2C.Item.Entity.QItem.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> lastModifiedDate = _super.lastModifiedDate;

    public final StringPath name = createString("name");

    public final NumberPath<Long> No = createNumber("No", Long.class);

    public QCategory(String variable) {
        super(Category.class, forVariable(variable));
    }

    public QCategory(Path<? extends Category> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCategory(PathMetadata metadata) {
        super(Category.class, metadata);
    }

}

