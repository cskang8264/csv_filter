
module.exports = (sequelize, DataTypes) => {
    
    return sequelize.define('sales', {

        sales_index: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: false, // Null 혀용 여부
            autoIncrement : true,
            primaryKey : true,
            comment: '상품인덱스', // 설명
        },
        sales_deleted: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품삭제여부', // 설명
        },
        sales_owner: {
            type: DataTypes.STRING(20), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '고객명', // 설명
        },
        sales_product_number: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매상품고유번호', // 설명
        },
        sales_product_name: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매상품명', // 설명
        },
        
        sales_product_actual_price: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매원가', // 설명
        },
        sales_amount: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '매출수량', // 설명
        },
        sales_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '판매날짜', // 설명
        }
        

    });
}