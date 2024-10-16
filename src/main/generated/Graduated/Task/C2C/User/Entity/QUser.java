package Graduated.Task.C2C.User.Entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = -246435423L;

    public static final QUser user = new QUser("user");

    public final Graduated.Task.C2C.core.QBaseEntity _super = new Graduated.Task.C2C.core.QBaseEntity(this);

    public final ListPath<Graduated.Task.C2C.Item.Entity.Item, Graduated.Task.C2C.Item.Entity.QItem> buyItem = this.<Graduated.Task.C2C.Item.Entity.Item, Graduated.Task.C2C.Item.Entity.QItem>createList("buyItem", Graduated.Task.C2C.Item.Entity.Item.class, Graduated.Task.C2C.Item.Entity.QItem.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath id = createString("id");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> lastModifiedDate = _super.lastModifiedDate;

    public final StringPath name = createString("name");

    public final NumberPath<Long> no = createNumber("no", Long.class);

    public final StringPath password = createString("password");

    public final ListPath<Graduated.Task.C2C.Item.Entity.Item, Graduated.Task.C2C.Item.Entity.QItem> sellItem = this.<Graduated.Task.C2C.Item.Entity.Item, Graduated.Task.C2C.Item.Entity.QItem>createList("sellItem", Graduated.Task.C2C.Item.Entity.Item.class, Graduated.Task.C2C.Item.Entity.QItem.class, PathInits.DIRECT2);

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

