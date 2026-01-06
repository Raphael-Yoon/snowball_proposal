
import os

file_path = r'c:\Pythons\snowball_proposal\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip_until = -1

# 1. Rename first category to "공통 서비스"
for i, line in enumerate(lines):
    if i <= skip_until:
        continue
    
    # Rename category 1
    if '<span class="font-bold text-[#2c5265] text-lg">컨설팅 서비스</span>' in line:
        new_lines.append(line.replace('컨설팅 서비스', '공통 서비스'))
        continue

    # Merge Consulting and System
    if '<!-- 2. 컨설팅 서비스 (Track A) -->' in line:
        # We found the consulting section. 
        # We will collect all questions from both consulting and the next "시스템 서비스" section.
        
        # Add the header for merged section
        new_lines.append('        <!-- 2. 컨설팅 서비스 (Track A) -->\n')
        new_lines.append('        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">\n')
        new_lines.append('          <button\n')
        new_lines.append('            class="faq-category-toggle w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"\n')
        new_lines.append('            onclick="toggleFaqCategory(this)">\n')
        new_lines.append('            <div class="flex items-center gap-3">\n')
        new_lines.append('              <span class="w-1.5 h-6 bg-[#2c5265] rounded-full"></span>\n')
        new_lines.append('              <span class="font-bold text-[#2c5265] text-lg">컨설팅 서비스 (Track A)</span>\n')
        new_lines.append('              <span class="text-sm text-slate-400 font-normal">(8)</span>\n')
        new_lines.append('            </div>\n')
        new_lines.append('            <svg class="faq-category-icon w-5 h-5 text-[#2c5265] transform transition-transform duration-300"\n')
        new_lines.append('              fill="none" stroke="currentColor" viewBox="0 0 24 24">\n')
        new_lines.append('              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\n')
        new_lines.append('            </svg>\n')
        new_lines.append('          </button>\n')
        new_lines.append('          <div class="faq-category-content hidden px-5 pb-5 border-t border-slate-50 pt-4">\n')
        new_lines.append('            <div class="space-y-2">\n')
        
        # Add the NEW question
        new_lines.append('              <!-- 질문: 지원하는 업무 영역 (New) -->\n')
        new_lines.append('              <div class="bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100">\n')
        new_lines.append('                <button\n')
        new_lines.append('                  class="faq-toggle w-full px-5 py-4 text-left flex justify-between items-center hover:bg-slate-100 transition-colors"\n')
        new_lines.append('                  onclick="toggleFaq(this)">\n')
        new_lines.append('                  <span class="font-bold text-[#2c5265] text-sm md:text-base break-keep">지원하는 업무 영역은 어디까지인가요?</span>\n')
        new_lines.append('                  <svg class="faq-icon w-5 h-5 text-[#2c5265] transform transition-transform duration-300 shrink-0 ml-2"\n')
        new_lines.append('                    fill="none" stroke="currentColor" viewBox="0 0 24 24">\n')
        new_lines.append('                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\n')
        new_lines.append('                  </svg>\n')
        new_lines.append('                </button>\n')
        new_lines.append('                <div class="faq-content hidden px-5 pb-4">\n')
        new_lines.append('                  <p class="text-slate-600 text-sm leading-relaxed break-keep">\n')
        new_lines.append('                    <strong>내부통제팀 내에 IT 담당자를 별도로 채용했을 때 수행하게 될 모든 업무 영역을 Snowball이 완벽히 대신합니다.</strong> 단순 가이드를 넘어 RCM(Risk Control Matrix) 설계 및 최적화, 연간 감사 준비와 실질적인 대응, 상시 통제 모니터링 수행 등 ITGC(IT일반통제) 운영 전반을 직접 책임집니다. 전문 인력 채용에 따른 리소스 부담은 없애고, 외부 감사 통과를 위한 실무적인 핵심 역할을 저희가 직접 수행해 드리는 것이 서비스의 본질입니다.\n')
        new_lines.append('                  </p>\n')
        new_lines.append('                </div>\n')
        new_lines.append('              </div>\n')

        # Now find the questions from the old consulting section
        in_consulting = False
        consulting_questions = []
        temp_q = []
        for j in range(i, len(lines)):
            if '<div class="space-y-2" id="faq-consulting-list">' in lines[j] or '<div class="space-y-2">' in lines[j]:
                in_consulting = True
                continue
            if in_consulting:
                if '</div>' in lines[j] and '</div>' in lines[j+1] and '</div>' in lines[j+2]: # End of category
                    break
                temp_q.append(lines[j])
        
        # Clean up temp_q to only get the question blocks
        # Actually, let's just find the next category start
        start_idx = -1
        end_idx = -1
        for j in range(i, len(lines)):
            if '<div class="space-y-2"' in lines[j]:
                start_idx = j + 1
                break
        
        depth = 1
        for j in range(start_idx, len(lines)):
            if '<div' in lines[j]: depth += 1
            if '</div' in lines[j]: depth -= 1
            if depth == 0:
                end_idx = j
                break
        
        consulting_content = lines[start_idx:end_idx]
        new_lines.extend(consulting_content)

        # Now find the "시스템 서비스" section and get its questions
        sys_start_idx = -1
        sys_end_idx = -1
        sys_cat_end = -1
        for j in range(end_idx, len(lines)):
            if '<span class="font-bold text-emerald-600 text-lg">시스템 서비스</span>' in lines[j]:
                # Found it
                for k in range(j, len(lines)):
                    if '<div class="space-y-2">' in lines[k]:
                        sys_start_idx = k + 1
                        break
                
                depth = 1
                for k in range(sys_start_idx, len(lines)):
                    if '<div' in lines[k]: depth += 1
                    if '</div' in lines[k]: depth -= 1
                    if depth == 0:
                        sys_end_idx = k
                        break
                
                # Find the end of the whole category div
                depth = 1
                cat_div_start = -1
                for k in range(j, 0, -1):
                    if '<div class="bg-white rounded-2xl' in lines[k]:
                        cat_div_start = k
                        break
                
                depth = 1
                for k in range(cat_div_start + 1, len(lines)):
                    if '<div' in lines[k]: depth += 1
                    if '</div' in lines[k]: depth -= 1
                    if depth == 0:
                        sys_cat_end = k
                        break
                break
        
        if sys_start_idx != -1:
            sys_content = lines[sys_start_idx:sys_end_idx]
            new_lines.extend(sys_content)
            
        new_lines.append('            </div>\n')
        new_lines.append('          </div>\n')
        new_lines.append('        </div>\n')
        
        skip_until = sys_cat_end
        continue

    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Successfully merged and updated FAQ")
