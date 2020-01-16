module.exports = (sequelize, DataTypes) => {
    
    return sequelize.define('naver_store', {


        product_order_number: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품주문번호', // 설명
        },
        order_number: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '주문번호', // 설명
        },
        order_date: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '주문날짜', // 설명
        },
        order_status: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '주문상태', // 설명
        },
        claim_status: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '클레임상태', // 설명
        },
        product_name: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품명', // 설명
        },
        options: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '옵션정보', // 설명
        },
        order_amount: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '수량', // 설명
        },
        buyer_name: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '구매자명', // 설명
        },
        buyer_id: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '구매자id', // 설명
        },

        recipient_name: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '수취인', // 설명
        }


    });
}