package Graduated.Task.C2C.Category.Entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QcategoryPrice is a Querydsl query type for categoryPrice
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QcategoryPrice extends EntityPathBase<categoryPrice> {

    private static final long serialVersionUID = 231383458L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QcategoryPrice categoryPrice = new QcategoryPrice("categoryPrice");

    public final QCategory category;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> maxPrice = createNumber("maxPrice", Integer.class);

    public final NumberPath<Integer> minPrice = createNumber("minPrice", Integer.class);

    public final NumberPath<Integer> status = createNumber("status", Integer.class);

    public QcategoryPrice(String variable) {
        this(categoryPrice.class, forVariable(variable), INITS);
    }

    public QcategoryPrice(Path<? extends categoryPrice> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QcategoryPrice(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QcategoryPrice(PathMetadata metadata, PathInits inits) {
        this(categoryPrice.class, metadata, inits);
    }

    public QcategoryPrice(Class<? extends categoryPrice> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new QCategory(forProperty("category")) : null;
    }

}

