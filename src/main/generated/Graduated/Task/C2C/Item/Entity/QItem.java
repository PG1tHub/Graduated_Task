package Graduated.Task.C2C.Item.Entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QItem is a Querydsl query type for Item
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItem extends EntityPathBase<Item> {

    private static final long serialVersionUID = 264250417L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QItem item = new QItem("item");

    public final Graduated.Task.C2C.core.QBaseEntity _super = new Graduated.Task.C2C.core.QBaseEntity(this);

    public final Graduated.Task.C2C.User.Entity.QUser buyer;

    public final Graduated.Task.C2C.Category.Entity.QCategory category;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath image = createString("image");

    public final NumberPath<Integer> itemState = createNumber("itemState", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> lastModifiedDate = _super.lastModifiedDate;

    public final StringPath name = createString("name");

    public final NumberPath<Long> No = createNumber("No", Long.class);

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    public final BooleanPath priceSimilar = createBoolean("priceSimilar");

    public final Graduated.Task.C2C.User.Entity.QUser seller;

    public final EnumPath<Item.State> type = createEnum("type", Item.State.class);

    public final NumberPath<Integer> viewCount = createNumber("viewCount", Integer.class);

    public QItem(String variable) {
        this(Item.class, forVariable(variable), INITS);
    }

    public QItem(Path<? extends Item> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QItem(PathMetadata metadata, PathInits inits) {
        this(Item.class, metadata, inits);
    }

    public QItem(Class<? extends Item> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.buyer = inits.isInitialized("buyer") ? new Graduated.Task.C2C.User.Entity.QUser(forProperty("buyer")) : null;
        this.category = inits.isInitialized("category") ? new Graduated.Task.C2C.Category.Entity.QCategory(forProperty("category")) : null;
        this.seller = inits.isInitialized("seller") ? new Graduated.Task.C2C.User.Entity.QUser(forProperty("seller")) : null;
    }

}

