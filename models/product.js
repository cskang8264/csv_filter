module.exports = (sequelize, DataTypes) => {
    
    return sequelize.define('product', {

        product_index: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: false, // Null 혀용 여부
            autoIncrement : true,
            primaryKey : true,
            comment: '상품인덱스', // 설명
        },
        product_deleted: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품삭제여부', // 설명
        },
        product_owner: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '고객명', // 설명
        },
        product_number: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품고유번호', // 설명
        },
        product_name: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '매입상품명', // 설명
        },
        
        product_price: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품가격', // 설명
        },
        product_actual_price: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '원가', // 설명
        },
        product_count: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '재고수량', // 설명
        },
        product_purchase_count: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '매입수량', // 설명
        },
        product_profit: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '이익율', // 설명
        },

        product_purchase_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '구입날짜', // 설명
        },
        product_start_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매시작날짜', // 설명
        },
        product_end_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매종료날짜', // 설명
        },
        product_business_days: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매기간', // 설명
        },
        product_sales_period: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매기간', // 설명
        },
        product_stock_period: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매기간', // 설명
        },
        product_reorder_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '리오더날짜', // 설명
        },
        product_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '', // 설명
        },
        categori1: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '카테고리', // 설명
        },
        categori2: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '카테고리', // 설명
        },
        categori3: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '카테고리', // 설명
        }
        

    });
}