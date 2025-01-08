"use client";
export function PolicyDetail() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">
                Chính Sách Cửa Hàng Tạp Hóa
            </h1>

            <section className="m-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Chính Sách Bảo Mật
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Chúng tôi cam kết bảo mật thông tin cá nhân của khách hàng.
                    Mọi thông tin mà bạn cung cấp sẽ được sử dụng chỉ với mục
                    đích phục vụ khách hàng tốt nhất và không bao giờ được chia
                    sẻ cho bên thứ ba mà không có sự đồng ý của bạn.
                </p>
            </section>

            <section className="m-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Chính Sách Giao Hàng
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Chúng tôi cung cấp dịch vụ giao hàng trong khu vực thành
                    phố. Thời gian giao hàng thường dao động từ 1 đến 3 giờ kể
                    từ khi bạn đặt hàng. Nếu có bất kỳ sự chậm trễ nào, chúng
                    tôi sẽ thông báo cho bạn ngay lập tức.
                </p>
            </section>

            <section className="m-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Chính Sách Hoàn Trả
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Bạn có thể hoàn trả sản phẩm trong vòng 7 ngày nếu sản phẩm
                    còn nguyên vẹn và có hóa đơn mua hàng. Đối với các sản phẩm
                    bị hỏng hoặc không đúng với mô tả, vui lòng liên hệ với
                    chúng tôi để được hỗ trợ.
                </p>
            </section>

            <section className="m-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Chính Sách Thanh Toán
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Chúng tôi chấp nhận nhiều hình thức thanh toán bao gồm tiền
                    mặt, thẻ tín dụng, và ví điện tử. Tất cả giao dịch sẽ được
                    xử lý một cách an toàn và bảo mật.
                </p>
            </section>

            <section className="m-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Liên Hệ với Chúng Tôi
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Nếu bạn có bất kỳ câu hỏi nào liên quan đến chính sách của
                    chúng tôi, vui lòng liên hệ qua số điện thoại:{" "}
                    <span className="font-bold dark:text-[#64ff4c] text-green-600">
                        0123-456-789
                    </span>{" "}
                    hoặc gửi email đến{" "}
                    <span className="font-bold dark:text-[#64ff4c] text-green-600">
                        thuanminh.2001286@gmail.com
                    </span>{" "}
                    .
                </p>
            </section>
        </div>
    );
}
