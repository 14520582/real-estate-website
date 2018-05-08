import { IAlbum, IRealEstate, IBook, INews } from "../interfaces/IEntity";

export class Data {
    public static ALL_ALBUMS : IAlbum[] = [
        {
            "id": 1,
            "name": "m-tp M-T",
            "price": 300000,
            "genre": {
                "id": 2,
                "name": "Ballad"
            },
            "artist": {
                "id": 1,
                "name": "Son Tung M-TP",
                "yearofbirth": 1994,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1517898792175,
            "cover": "https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fblogs-images.forbes.com%2Fbrittanyhodak%2Ffiles%2F2017%2F08%2F20988198_10154975234150369_1493436770276743217_o-1200x1200.jpg%3Fwidth%3D960"
        },
        {
            "id": 2,
            "name": "SB",
            "price": 200000,
            "genre": {
                "id": 4,
                "name": "Rock"
            },
            "artist": {
                "id": 2,
                "name": "Soobin Hoang Son",
                "yearofbirth": 1995,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1516898792175,
            "cover": "http://2.bp.blogspot.com/-AJeKHaTwLg8/UIOay0amvwI/AAAAAAAAMNc/m_qwKEVBQXo/s1600/MELTING.jpg"
        },
        {
            "id": 3,
            "name": "Bay",
            "price": 350000,
            "genre": {
                "id": 2,
                "name": "Ballad"
            },
            "artist": {
                "id": 1,
                "name": "Son Tung M-TP",
                "yearofbirth": 1994,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "https://images-na.ssl-images-amazon.com/images/I/81DqWqUyz8L._SY355_.jpg"
        },
        {
            "id": 4,
            "name": "Love",
            "price": 250000,
            "genre": {
                "id": 2,
                "name": "Ballad"
            },
            "artist": {
                "id": 1,
                "name": "Son Tung M-TP",
                "yearofbirth": 1994,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "http://www.muacd.com/files/sanpham/883/300_1/jpg/Justin-Bieber-Believe-Acoustic_300x300.jpg"
        },
        {
            "id": 5,
            "name": "Black Ye",
            "price": 450000,
            "genre": {
                "id": 5,
                "name": "Pop"
            },
            "artist": {
                "id": 2,
                "name": "Soobin Hoang Son",
                "yearofbirth": 1995,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "http://k14.vcmedia.vn/k:thumb_w/600/hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2013/12/131220musicAB-%282%29-be9a1/nhung-album-hot-nhat-usuk-nam-2013.png"
        },
        {
            "id": 6,
            "name": "UN",
            "price": 200000,
            "genre": {
                "id": 3,
                "name": "R&B"
            },
            "artist": {
                "id": 1,
                "name": "Son Tung M-TP",
                "yearofbirth": 1994,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "https://thomasbleach.files.wordpress.com/2016/05/broods-conscious.jpg?w=495&h=495"
        },
        {
            "id": 7,
            "name": "NG",
            "price": 230000,
            "genre": {
                "id": 2,
                "name": "Ballad"
            },
            "artist": {
                "id": 1,
                "name": "Son Tung M-TP",
                "yearofbirth": 1994,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "https://lh3.googleusercontent.com/proxy/RUxSBSC-4M1D5pmKGmtxn75QyZn5A50vGIpaaD9TA6PjaIerNXFbP_651MiD-EswendpEwWKJ5dymrpcQlp7T-9La-RejHCx=s426"
        },
        {
            "id": 8,
            "name": "NH hhh",
            "price": 750000,
            "genre": {
                "id": 5,
                "name": "Pop"
            },
            "artist": {
                "id": 2,
                "name": "Soobin Hoang Son",
                "yearofbirth": 1995,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "https://ae01.alicdn.com/kf/HTB1z_0qJXXXXXc2XpXXq6xXFXXXX/GIRLS-GENERATION-SNSD-SINGLE-ALBUM-LION-HEART-Release-Date-2015-8-20-KPOP.jpg"
        },
        {
            "id": 9,
            "name": "sss ffff",
            "price": 450000,
            "genre": {
                "id": 4,
                "name": "Rock"
            },
            "artist": {
                "id": 1,
                "name": "Son Tung M-TP",
                "yearofbirth": 1994,
                "country": {
                    "id": 1,
                    "name": "Vietnamese"
                },
                "sex": 1
            },
            "releasedate": 1518898792175,
            "cover": "https://4.bp.blogspot.com/-eQ9JtatSR1Q/VuKDhFMmZDI/AAAAAAABYiE/6QRz1S-ZP1U9YZoRdGz7DBacjOT8tUXfg/s640/t-ara%2Bhyomin%2Bsketch%2Bmini%2Balbum.jpg"
        }
    ]
    public static ALL_REAL_ESTATE : IRealEstate[] = [
        {
            "id": 1,
            "name": "Bán căn hộ CT3 Nam Cường Cổ Nhuế DT 71.2m2 0944040099",
            "price": "28 triệu/m²",
            "description": "Chúng tôi đang cần bán căn hộ chung cư DT 71.2m2 thuộc khu CT3B khu Nam Cường tầng 10 ban công Đông Bắc, cửa Tây Nam, giá 33tr/m2 giá đã bao gồm cả nội thất căn hộ của tôi bao gồm 2 phòng ngủ, 2WC, 1 phòng khách, 1 bếp, 3 tivi, 3 điều hoà, sofa xịn, gường tủ mới đẹp, chúng tôi đi xa không tiện mang theo nên để lại hết đồ, căn hộ của chúng tôi thuộc chung cư cao cấp hiện đại, phí dịch vụ rẻ theo đơn giá nhà nước, chúng tôi đang cần bán gấp giá 28tr/m2, đã bao gồm tất cả các loại phí, mọi liên hệ Cường 0944040099.",
            "location": "Bắc Từ Liêm, Hà Nội",
            "area" : "71.2 m²",
            "type": "Cho thue",
            "cover": "https://file1.batdongsan.com.vn/guestthumb745x510.20160404105711936.jpg"
        },
        {
            "id": 2,
            "name": "Chính chủ bán căn góc A3: 85.29m2 đô thị Nam Cường Cổ Nhuế, Bắc Từ Liêm, Hà Nội",
            "price": "2.7 tỷ",
            "description": "Do có nhu cầu đổi căn rộng, cần bán căn hộ 85.29m2 full đồ (đang dùng trong khu đô thị mới CT3 Nam Cường - Cổ Nhuế, gồm 2 PN, 2WC. Cửa chính hướng Bắc, ban công hướng Nam. Khu đô thị gồm 04 tòa cao 19 tầng có sân chơi, kết nối Phạm văn Đồng, Hoàng Quốc Việt, Trần Cung và Tây Hồ Tây thuận tiện giao thông nhưng yên tĩnh. Cách trường tiểu học Newton, Pascal 200m, nhiều trường mẫu giáo, 5 siêu thị, bể bơi. Đồ kèm theo: Sàn gỗ mới, 03 điều hòa Inverter, Sofa, tủ quần áo, bàn học, bộ bàn ăn 6 ghế (có thể mở rộng 10 người), tủ bếp + bếp từ Electrolux... Về ở luôn. Giá: 2,7 tỷ (có thương lượng với khách hàng có thiện chí). LH: 0983650289.",
            "location": "Bắc Từ Liêm, Hà Nội",
            "area" : "85.29 m²",
            "type": "Cho thue",
            "cover": "https://file4.batdongsan.com.vn/resize/745x510/2017/12/26/20171226160024-bb2f_wm.jpg"
        },
        {
            "id": 3,
            "name": "Bán căn hộ 150m2 CT1 khu đô thị mới Nam Cường Cổ Nhuế. Giá rẻ nhất thị trường",
            "price": "28 triệu/m²",
            "description": "Chính chủ bán căn hộ 150m2 tầng 12 cửa Nam ban công Bắc. Do phải đi công tác nước ngoài nên mình muôn sang nhượng lại căn hộ tại 150m2 chia 3 PN. Nội thất cơ bản bao gồm sàn gỗ tủ bếp thiết bị vệ sinh đầy đủ. Do có nhu cầu bán thật sự nên mình cần tìm người mua thật sự. Giá minh bán là 27tr/m2. Moi chi tiết vui lòng liên hệ: 0978717123 (A thường).",
            "location": "Bắc Từ Liêm, Hà Nội",
            "area" : "71.2 m²",
            "type": "Cho thue",
            "cover": "https://file4.batdongsan.com.vn/resize/745x510/2017/10/04/20171004104220-f0c0_wm.jpg"
        },
        {
            "id": 4,
            "name": "Bán căn hộ CT3 Nam Cường Cổ Nhuế DT 71.2m2 0944040099",
            "price": "28 triệu/m²",
            "description": "Bán căn hộ chung cư toà CT3A Nam Cường thuộc khu đô thị mới Cổ Nhuế, Bắc Từ Liêm. Căn hộ Diện tích: 89,22m2 thiết kế 2PN 2 wc PK và bếp cửa hướng ĐN ban công TB. Nhà đã làm nội thất như hình. Có sân chơi cho trẻ dưới chân toà nhà có hầm để xe rộng rãi. Toà nhà có nhiều lối đi từ ngõ 234 Hoàng Quốc Việt, 641 Phạm Văn Đồng hoặc đi từ đường Trần Cung đều được. Thích hợp cho hộ gia đình trẻ sinh sống. Giá: 2,6 tỷ bao phí SĐCC.",
            "location": "Bắc Từ Liêm, Hà Nội",
            "area" : "71.2 m²",
            "type": "Cho thue",
            "cover": "https://file4.batdongsan.com.vn/resize/745x510/2018/03/11/20180311175608-d493_wm.jpg"
        },
        {
            "id": 5,
            "name": "Bán căn hộ CT3 Nam Cường Cổ Nhuế DT 71.2m2 0944040099",
            "price": "28 triệu/m²",
            "description": "Nhận nhà ở ngay: (Căn hộ 3 phòng ngủ) căn 306 tòa nhà CT3D trong khu đô thị mới Cổ Nhuế - tập đoàn Nam Cường, sở hữu chính chủ, có sổ đỏ. Diện tích 110m2; 3 phòng ngủ, 2 nhà vệ sinh với thiết kế hợp lý, rộng rãi, thoáng mát, tầm view đẹp. Nhà đẹp với full nội thất, để lại nhiều đồ: Điều hòa, tủ bếp, tủ quần áo, tivi, thiết bị vệ sinh, bàn trang điểm... Cửa ra vào hướng Tây Nam, cửa sổ hướng Đông Bắc, phù hợp với người Tây Tứ Trạch. Căn hộ tầng thấp phù hợp với gia đình có người già, người cao tuổi. Giá trọn gói 3 tỷ.",
            "location": "Bắc Từ Liêm, Hà Nội",
            "area" : "71.2 m²",
            "type": "Cho thue",
            "cover": "https://file4.batdongsan.com.vn/resize/745x510/2017/11/20/20171120105105-7679_wm.jpg"
        },
        {
            "id": 6,
            "name": "Chính chủ cần bán CHCC P505 tòa CT3A KĐT Nam Cường, ngõ 234 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội",
            "price": "28 triệu/m²",
            "description": "Chính chủ cần bán CHCC P505 tòa CT3A KĐT Nam Cường, ngõ 234 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội. Diện tích: 89,2m2, gồm 2 phòng ngủ, 2wc, 1 phòng khách, 1 bếp, 1 ban công, nội thất đầy đủ, điện nước tốt, không gian thoáng mát.",
            "location": "Bắc Từ Liêm, Hà Nội",
            "area" : "71.2 m²",
            "type": "Cho thue",
            "cover": "https://file4.batdongsan.com.vn/resize/745x510/2018/03/09/20180309160558-b15f_wm.jpg"
        }
    ]
    public static ALL_BOOK : IBook[] = [
        {
            "id": 1,
            "name": "a",
            "price": 100,
            "author": "b",
            "releasedate": 15444444411,
            "description": "d1",
            "type": "b"
        },
        {
            "id": 2,
            "name": "s",
            "price": 123,
            "author": "b",
            "releasedate": 15444444411,
            "description": "d1",
            "type": "b"
        }
    ]
    public static NEWS : INews[] = [
        {
            "id": 1,
            "title": "Các đối tượng tung tin ảo gây 'sốt đất' tại Tp.HCM sẽ bị xử lý",
            "datecreated": 1525610542,
            "headline": "Sở Xây dựng Tp.HCM sẽ đề nghị cơ quan chức năng, chính quyền địa phương xử lý các đối tượng tung tin sai lệch khiến giá đất tại vùng ven Tp.HCM lại lên 'cơn sốt'.",
            "thumbnail": "https://file4.batdongsan.com.vn/2018/05/04/b9sp0zUm/20180504103001-e786.jpg",
            "content": "Liên quan đến việc 'sốt đất' nền tái diễn ở các vùng ven quận 2, quận 9, ông Phạm Đăng Hồ, Phó trưởng Phòng phát triển nhà – Sở Xây dựng Tp.HCM cho biết, nguyên nhân dẫn đến tình trạng 'sốt đất' là do dự báo về phát triển kinh tế Việt Nam nói chung và Tp.HCM trong năm 2018 có tăng trưởng tốt, người dân nắm thông tin này nên đầu tư.Ngoài ra, trên các địa bàn quận 2, quận 9 đang tập trung đầu tư xây dựng nhiều dự án giao thông, hạ tầng như nút giao Mỹ Thủy, nâng cấp các tuyến đường như Nguyễn Cư Trinh, Đỗ Xuân Hợp, tuyến đường sắt đô thị.... khiến đất ở đây tăng giá.Cùng với đó, Tp.HCM đã có chủ trương xây dựng khu đô thị sáng tạo ở khu Đông gồm quận 2, 9 và Thủ Đức, cũng là lý do tạo 'sốt đất'. Đặc biệt là sau vụ cháy chung cư Carina trong tháng 3, tâm lý của người dân bị ảnh hưởng khiến nhiều người muốn đầu tư đất nền.",
            "category": {
                "name": "market"
            }
        },
        {
            "id": 1,
            "title": "Các đối tượng tung tin ảo gây 'sốt đất' tại Tp.HCM sẽ bị xử lý",
            "datecreated": 1525610542,
            "headline": "Sở Xây dựng Tp.HCM sẽ đề nghị cơ quan chức năng, chính quyền địa phương xử lý các đối tượng tung tin sai lệch khiến giá đất tại vùng ven Tp.HCM lại lên 'cơn sốt'.",
            "thumbnail": "https://file4.batdongsan.com.vn/2018/05/04/b9sp0zUm/20180504103001-e786.jpg",
            "content": "Liên quan đến việc 'sốt đất' nền tái diễn ở các vùng ven quận 2, quận 9, ông Phạm Đăng Hồ, Phó trưởng Phòng phát triển nhà – Sở Xây dựng Tp.HCM cho biết, nguyên nhân dẫn đến tình trạng 'sốt đất' là do dự báo về phát triển kinh tế Việt Nam nói chung và Tp.HCM trong năm 2018 có tăng trưởng tốt, người dân nắm thông tin này nên đầu tư.Ngoài ra, trên các địa bàn quận 2, quận 9 đang tập trung đầu tư xây dựng nhiều dự án giao thông, hạ tầng như nút giao Mỹ Thủy, nâng cấp các tuyến đường như Nguyễn Cư Trinh, Đỗ Xuân Hợp, tuyến đường sắt đô thị.... khiến đất ở đây tăng giá.Cùng với đó, Tp.HCM đã có chủ trương xây dựng khu đô thị sáng tạo ở khu Đông gồm quận 2, 9 và Thủ Đức, cũng là lý do tạo 'sốt đất'. Đặc biệt là sau vụ cháy chung cư Carina trong tháng 3, tâm lý của người dân bị ảnh hưởng khiến nhiều người muốn đầu tư đất nền.",
            "category": {
                "name": "market"
            }
        },
        {
            "id": 1,
            "title": "Các đối tượng tung tin ảo gây 'sốt đất' tại Tp.HCM sẽ bị xử lý",
            "datecreated": 1525610542,
            "headline": "Sở Xây dựng Tp.HCM sẽ đề nghị cơ quan chức năng, chính quyền địa phương xử lý các đối tượng tung tin sai lệch khiến giá đất tại vùng ven Tp.HCM lại lên 'cơn sốt'.",
            "thumbnail": "https://file4.batdongsan.com.vn/2018/05/04/b9sp0zUm/20180504103001-e786.jpg",
            "content": "Liên quan đến việc 'sốt đất' nền tái diễn ở các vùng ven quận 2, quận 9, ông Phạm Đăng Hồ, Phó trưởng Phòng phát triển nhà – Sở Xây dựng Tp.HCM cho biết, nguyên nhân dẫn đến tình trạng 'sốt đất' là do dự báo về phát triển kinh tế Việt Nam nói chung và Tp.HCM trong năm 2018 có tăng trưởng tốt, người dân nắm thông tin này nên đầu tư.Ngoài ra, trên các địa bàn quận 2, quận 9 đang tập trung đầu tư xây dựng nhiều dự án giao thông, hạ tầng như nút giao Mỹ Thủy, nâng cấp các tuyến đường như Nguyễn Cư Trinh, Đỗ Xuân Hợp, tuyến đường sắt đô thị.... khiến đất ở đây tăng giá.Cùng với đó, Tp.HCM đã có chủ trương xây dựng khu đô thị sáng tạo ở khu Đông gồm quận 2, 9 và Thủ Đức, cũng là lý do tạo 'sốt đất'. Đặc biệt là sau vụ cháy chung cư Carina trong tháng 3, tâm lý của người dân bị ảnh hưởng khiến nhiều người muốn đầu tư đất nền.",
            "category": {
                "name": "market"
            }
        },
        {
            "id": 1,
            "title": "Các đối tượng tung tin ảo gây 'sốt đất' tại Tp.HCM sẽ bị xử lý",
            "datecreated": 1525610542,
            "headline": "Sở Xây dựng Tp.HCM sẽ đề nghị cơ quan chức năng, chính quyền địa phương xử lý các đối tượng tung tin sai lệch khiến giá đất tại vùng ven Tp.HCM lại lên 'cơn sốt'.",
            "thumbnail": "https://file4.batdongsan.com.vn/2018/05/04/b9sp0zUm/20180504103001-e786.jpg",
            "content": "Liên quan đến việc 'sốt đất' nền tái diễn ở các vùng ven quận 2, quận 9, ông Phạm Đăng Hồ, Phó trưởng Phòng phát triển nhà – Sở Xây dựng Tp.HCM cho biết, nguyên nhân dẫn đến tình trạng 'sốt đất' là do dự báo về phát triển kinh tế Việt Nam nói chung và Tp.HCM trong năm 2018 có tăng trưởng tốt, người dân nắm thông tin này nên đầu tư.Ngoài ra, trên các địa bàn quận 2, quận 9 đang tập trung đầu tư xây dựng nhiều dự án giao thông, hạ tầng như nút giao Mỹ Thủy, nâng cấp các tuyến đường như Nguyễn Cư Trinh, Đỗ Xuân Hợp, tuyến đường sắt đô thị.... khiến đất ở đây tăng giá.Cùng với đó, Tp.HCM đã có chủ trương xây dựng khu đô thị sáng tạo ở khu Đông gồm quận 2, 9 và Thủ Đức, cũng là lý do tạo 'sốt đất'. Đặc biệt là sau vụ cháy chung cư Carina trong tháng 3, tâm lý của người dân bị ảnh hưởng khiến nhiều người muốn đầu tư đất nền.",
            "category": {
                "name": "market"
            }
        }
    ]
    public static TOPICS: any[] = [
        {
            "title": "Thị trường TP. HCM"
        },
        {
            "title": "Đất Phú Quốc"
        },
        {
            "title": "Đặc khu kinh tế"
        },
        {
            "title": "Căn hộ siêu sang quận 2"
        },        
        {
            "title": "Tái định cư khu Tân Tạo"
        }
    ]
}