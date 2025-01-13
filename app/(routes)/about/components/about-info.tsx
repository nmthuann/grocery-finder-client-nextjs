'use client'
import References from '@/components/common/references'

export function AboutInfo() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-6'>Giới Thiệu Về Cửa Hàng Tạp Hóa</h1>

      <section className='m-6'>
        <h2 className='text-2xl font-semibold mb-4'>Về Chúng Tôi</h2>
        <p className='text-slate-600 dark:text-slate-400'>
          Chào mừng bạn đến với cửa hàng tạp hóa của chúng tôi!{' '}
          <span className='font-bold dark:text-[#64ff4c] text-green-600'>Được thành lập từ năm 1993</span>, chúng tôi tự
          hào mang đến <span className='font-bold dark:text-[#64ff4c] text-green-600'>hơn 30 năm kinh nghiệm</span> phục
          vụ khách hàng. Cửa hàng chuyên cung cấp các loại{' '}
          <span className='font-bold dark:text-[#64ff4c] text-green-600'>bánh kẹo</span>,{' '}
          <span className='font-bold dark:text-[#64ff4c] text-green-600'>nước ngọt</span>,{' '}
          <span className='font-bold dark:text-[#64ff4c] text-green-600'>mì gói</span> và nhiều mặt hàng thiết yếu khác,
          đảm bảo chất lượng và giá cả hợp lý.
        </p>
        <p className='text-slate-600 dark:text-slate-400 mt-4'>
          Với phương châm &quot;Khách hàng là trung tâm&quot;, chúng tôi luôn nỗ lực cải thiện dịch vụ và mang đến trải
          nghiệm mua sắm tuyệt vời nhất cho khách hàng.
        </p>
      </section>

      <section className='m-6'>
        <h2 className='text-2xl font-semibold mb-4'>Sản Phẩm của Chúng Tôi</h2>
        <ul className='list-disc list-inside text-slate-600 dark:text-slate-400'>
          <li>Thực phẩm ăn liền, nhu yếu phẩm thiết yếu</li>
          <li>Đồ uống có cồn và không có cồn</li>
          <li>Đồ gia dụng và văn phòng phẩm</li>
          <li>Sản phẩm chăm sóc sức khỏe và làm đẹp</li>
        </ul>
      </section>

      <section className='m-6'>
        <h2 className='text-2xl font-semibold mb-4'>Sứ Mệnh của Chúng Tôi</h2>
        <p className='text-slate-600 dark:text-slate-400'>
          Sứ mệnh của chúng tôi là cung cấp cho khách hàng những sản phẩm chất lượng cao với giá cả hợp lý, đồng thời
          duy trì sự hài lòng và tin tưởng của khách hàng.
        </p>
      </section>

      <section className='m-6'>
        <h2 className='text-2xl font-semibold mb-4'>Liên Hệ với Chúng Tôi</h2>
        <p className='text-slate-600 dark:text-slate-400'>
          Để biết thêm thông tin hoặc có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua số điện thoại:{' '}
          <span className='font-bold dark:text-[#64ff4c] text-green-600'>0123-456-789</span> hoặc gửi email đến{' '}
          <span className='font-bold dark:text-[#64ff4c] text-green-600'>thuanminh.2001286@gmail.com</span> .
        </p>
      </section>

      <section className='m-6'>
        <h2 className='text-2xl font-semibold mb-4'>Khám Phá Thêm</h2>
        <References />
      </section>
    </div>
  )
}
