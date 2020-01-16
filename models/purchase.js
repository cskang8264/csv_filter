module.exports = (sequelize, DataTypes) => {
    
    return sequelize.define('purchase', {
        

        purchase_index: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: false, // Null 혀용 여부
            autoIncrement : true,
            primaryKey : true,
            comment: '상품인덱스', // 설명
        },
        purchase_deleted: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품삭제여부', // 설명
        },
        purchase_owner: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '고객명', // 설명
        },
        purchase_product_number: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '상품고유번호', // 설명
        },
        purchase_product_name: {
            type: DataTypes.STRING(40), // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '매입상품명', // 설명
        },
        
        purchase_product_actual_price: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '구입원가', // 설명
        },
        purchase_amount: {
            type: DataTypes.INTEGER, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '수량', // 설명
        },
        purchase_date: {
            type: DataTypes.DATE, // 자료형
            allowNull: true, // Null 혀용 여부
            comment: '구입날짜', // 설명
        }



        

    });
}