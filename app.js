const state = {
  page: "dashboard",
  query: "",
};

const navItems = [
  { key: "dashboard", icon: "⌂", label: "工作台" },
  { key: "projects", icon: "▣", label: "项目" },
  { key: "requirements", icon: "▤", label: "需求" },
  { key: "tasks", icon: "☑", label: "任务" },
  { key: "changes", icon: "⇄", label: "变更" },
  { key: "risks", icon: "◇", label: "风险" },
  { key: "documents", icon: "▧", label: "文档" },
  { key: "customer", icon: "◎", label: "客户协同" },
];

const projects = [
  { no: "PRJ-2024-0101", name: "ERP管理系统", customer: "XX科技有限公司", type: "企业管理软件", manager: "张伟", product: "李丽", devLead: "李明", status: "进行中", tag: "blue", progress: 78, start: "2024-01-01", end: "2024-08-31", requirementCount: 56, taskCount: 128, defectCount: 8, risks: 3, docs: 32 },
  { no: "PRJ-2024-0102", name: "CRM客户管理系统", customer: "YY有限公司", type: "业务系统", manager: "王芳", product: "王强", devLead: "赵强", status: "进行中", tag: "blue", progress: 60, start: "2024-02-15", end: "2024-07-15", requirementCount: 42, taskCount: 96, defectCount: 5, risks: 2, docs: 18 },
  { no: "PRJ-2024-0103", name: "小程序商城", customer: "ZZ商贸有限公司", type: "移动应用", manager: "李丽", product: "赵敏", devLead: "刘洋", status: "延期", tag: "red", progress: 45, start: "2024-01-20", end: "2024-06-15", requirementCount: 32, taskCount: 68, defectCount: 12, risks: 6, docs: 22 },
  { no: "PRJ-2024-0104", name: "OA办公系统", customer: "AA集团", type: "企业管理软件", manager: "陈雨", product: "李丽", devLead: "孙浩", status: "进行中", tag: "blue", progress: 90, start: "2024-03-01", end: "2024-09-01", requirementCount: 68, taskCount: 156, defectCount: 6, risks: 1, docs: 26 },
  { no: "PRJ-2024-0105", name: "数据中台建设", customer: "BB科技有限公司", type: "数据平台", manager: "张伟", product: "王芳", devLead: "周杰", status: "延期", tag: "red", progress: 20, start: "2024-04-10", end: "2024-08-10", requirementCount: 38, taskCount: 72, defectCount: 15, risks: 7, docs: 24 },
  { no: "PRJ-2024-0106", name: "移动端产品迭代", customer: "CC互联网有限公司", type: "移动应用", manager: "王芳", product: "赵强", devLead: "赵强", status: "进行中", tag: "blue", progress: 100, start: "2024-02-20", end: "2024-04-20", requirementCount: 55, taskCount: 110, defectCount: 6, risks: 0, docs: 31 },
  { no: "PRJ-2024-0107", name: "电商平台开发", customer: "DD贸易有限公司", type: "业务系统", manager: "李丽", product: "张伟", devLead: "刘洋", status: "已完成", tag: "green", progress: 100, start: "2023-11-01", end: "2024-02-28", requirementCount: 22, taskCount: 44, defectCount: 0, risks: 0, docs: 35 },
  { no: "PRJ-2024-0108", name: "BI报表系统", customer: "EE数据科技", type: "数据平台", manager: "陈雨", product: "王强", devLead: "孙浩", status: "已完成", tag: "green", progress: 100, start: "2023-10-15", end: "2024-03-31", requirementCount: 26, taskCount: 48, defectCount: 4, risks: 0, docs: 21 },
  { no: "PRJ-2024-0109", name: "小程序开发", customer: "FF网络有限公司", type: "移动应用", manager: "周杰", product: "李丽", devLead: "吴磊", status: "暂停", tag: "muted", progress: 30, start: "2024-07-01", end: "2024-10-01", requirementCount: 18, taskCount: 35, defectCount: 4, risks: 3, docs: 9 },
  { no: "PRJ-2024-0110", name: "供应链管理系统", customer: "GG物流有限公司", type: "业务系统", manager: "张伟", product: "王芳", devLead: "周杰", status: "进行中", tag: "blue", progress: 65, start: "2024-02-01", end: "2024-08-01", requirementCount: 60, taskCount: 112, defectCount: 9, risks: 4, docs: 20 },
  { no: "PRJ-2024-0111", name: "客户服务平台", customer: "HH服务有限公司", type: "业务系统", manager: "王芳", product: "陈雨", devLead: "吴磊", status: "进行中", tag: "blue", progress: 75, start: "2024-04-01", end: "2024-09-15", requirementCount: 48, taskCount: 86, defectCount: 7, risks: 2, docs: 16 },
  { no: "PRJ-2024-0112", name: "IoT设备管理平台", customer: "II物联科技", type: "物联网平台", manager: "李丽", product: "赵强", devLead: "赵强", status: "延期", tag: "red", progress: 25, start: "2024-03-15", end: "2024-07-30", requirementCount: 26, taskCount: 54, defectCount: 11, risks: 6, docs: 14 },
];

const requirements = [
  { no: "REQ-2024-0056", name: "用户登录功能优化", project: "项目管理系统", type: "功能需求", priority: "高", status: "开发中", creator: "张伟", createdAt: "2024-05-20 09:30", owner: "李丽", category: "用户管理", subcategory: "登录/认证", scope: "Web端、移动端", version: "v2.3.0", hours: "16 人天" },
  { no: "REQ-2024-0055", name: "任务甘特图视图", project: "项目管理系统", type: "功能需求", priority: "高", status: "已完成", creator: "李丽", createdAt: "2024-05-19 16:45", owner: "王芳", category: "项目计划", subcategory: "甘特图", scope: "Web端", version: "v2.2.0", hours: "10 人天" },
  { no: "REQ-2024-0054", name: "文件上传大小限制调整", project: "项目管理系统", type: "非功能需求", priority: "中", status: "开发中", creator: "王强", createdAt: "2024-05-19 11:20", owner: "赵敏", category: "文档管理", subcategory: "上传限制", scope: "Web端", version: "v2.3.0", hours: "4 人天" },
  { no: "REQ-2024-0053", name: "消息通知中心", project: "项目管理系统", type: "功能需求", priority: "中", status: "待评审", creator: "赵敏", createdAt: "2024-05-18 15:10", owner: "刘洋", category: "通知", subcategory: "企业微信", scope: "Web端、企业微信", version: "v2.4.0", hours: "8 人天" },
  { no: "REQ-2024-0052", name: "需求导出为Excel", project: "项目管理系统", type: "功能需求", priority: "低", status: "待处理", creator: "刘洋", createdAt: "2024-05-18 10:05", owner: "陈晨", category: "需求管理", subcategory: "导出", scope: "Web端", version: "v2.4.0", hours: "3 人天" },
];

const tasks = [
  { no: "TASK-2024-0001", title: "用户登录功能开发", project: "ERP管理系统", type: "开发", priority: "高", status: "进行中", owner: "张伟", start: "2024-05-01", end: "2024-05-15", progress: 70 },
  { no: "TASK-2024-0002", title: "登录接口开发", project: "ERP管理系统", type: "开发", priority: "高", status: "进行中", owner: "李明", start: "2024-05-01", end: "2024-05-10", progress: 100 },
  { no: "TASK-2024-0003", title: "用户列表页面设计", project: "CRM客户管理系统", type: "设计", priority: "中", status: "测试中", owner: "王芳", start: "2024-05-03", end: "2024-05-20", progress: 80 },
  { no: "TASK-2024-0005", title: "数据导出功能开发", project: "数据中台建设", type: "开发", priority: "高", status: "待开始", owner: "刘洋", start: "2024-05-10", end: "2024-05-25", progress: 0 },
  { no: "TASK-2024-0006", title: "报表页面设计", project: "数据中台建设", type: "设计", priority: "中", status: "进行中", owner: "陈雨", start: "2024-05-08", end: "2024-05-22", progress: 40 },
  { no: "TASK-2024-0007", title: "移动端首页开发", project: "小程序商城", type: "开发", priority: "高", status: "进行中", owner: "孙浩", start: "2024-05-02", end: "2024-05-16", progress: 90 },
];

const changes = [
  { no: "CHG-2024-0018", title: "增加导出字段", project: "项目管理系统", requirement: "REQ-2024-0056", source: "客户", proposer: "王经理", days: "+2 天", hours: "16h", status: "待客户确认", confirm: "待确认", createdAt: "2024-05-22 10:30" },
  { no: "CHG-2024-0017", title: "审批流改为三级", project: "项目管理系统", requirement: "REQ-2024-0053", source: "客户", proposer: "赵敏", days: "+5 天", hours: "32h", status: "待评估", confirm: "未提交", createdAt: "2024-05-21 16:45" },
  { no: "CHG-2024-0016", title: "登录字段名称调整", project: "项目管理系统", requirement: "REQ-2024-0056", source: "内部", proposer: "李丽", days: "0 天", hours: "2h", status: "已关闭", confirm: "已确认", createdAt: "2024-05-20 09:15" },
];

const risks = [
  { no: "RISK-2024-0024", title: "核心接口性能不达标", project: "项目管理系统", level: "高", category: "技术风险", probability: "高", impact: "高", status: "进行中", owner: "李丽", date: "2024-05-20" },
  { no: "RISK-2024-0023", title: "第三方服务不稳定", project: "项目管理系统", level: "高", category: "外部风险", probability: "中", impact: "高", status: "待处理", owner: "王强", date: "2024-05-19" },
  { no: "RISK-2024-0022", title: "关键人员离职", project: "项目管理系统", level: "中", category: "资源风险", probability: "中", impact: "中", status: "进行中", owner: "张伟", date: "2024-05-18" },
  { no: "RISK-2024-0021", title: "需求范围变更频繁", project: "项目管理系统", level: "中", category: "需求风险", probability: "高", impact: "中", status: "待处理", owner: "赵敏", date: "2024-05-18" },
];

const documents = [
  { name: "登录功能需求规格说明书", project: "项目管理系统", type: "需求文档", version: "v1.0", related: "REQ-2024-0056", visible: "客户可见", updated: "2024-05-22" },
  { name: "接口设计文档", project: "项目管理系统", type: "技术方案", version: "v1.2", related: "TASK-2024-0002", visible: "内部可见", updated: "2024-05-21" },
  { name: "产品原型 - 登录页", project: "项目管理系统", type: "原型文件", version: "v1.0", related: "REQ-2024-0056", visible: "客户可见", updated: "2024-05-20" },
  { name: "内部延期复盘", project: "数据中台建设", type: "会议纪要", version: "v1.0", related: "RISK-2024-0023", visible: "内部可见", updated: "2024-05-19" },
];

const confirmations = [
  { title: "订单导出报表变更", type: "需求变更", project: "项目管理系统", impact: "影响工期 2 天，增加 16h 工时", status: "待确认" },
  { title: "测试环境交付", type: "里程碑", project: "项目管理系统", impact: "等待客户确认测试环境可用", status: "待确认" },
  { title: "需求规格说明书 v1.4", type: "需求确认", project: "项目管理系统", impact: "确认登录与权限范围", status: "待确认" },
];

const pages = {
  dashboard: {
    title: "工作台",
    desc: "查看待办、项目风险、任务进度和客户确认事项。",
    actions: [{ label: "新建项目", action: () => toast("已打开新建项目入口") }],
    render: renderDashboard,
  },
  projects: {
    title: "项目管理",
    desc: "",
    actions: [
      { label: "导入", action: () => toast("导入项目待接入") },
      { label: "导出", action: () => toast("项目数据已导出") },
      { label: "＋ 新建项目", primary: true, action: () => toast("新建项目表单待接入") },
    ],
    render: renderProjects,
  },
  requirements: {
    title: "需求列表",
    desc: "管理和跟踪所有需求，确保产品按计划交付。",
    actions: [{ label: "添加需求", primary: true, action: () => toast("添加需求表单待接入") }],
    render: renderRequirements,
  },
  tasks: {
    title: "任务管理",
    desc: "分配任务、跟踪进度、登记工时和处理延期。",
    actions: [{ label: "新建任务", primary: true, action: () => toast("新建任务表单待接入") }],
    render: renderTasks,
  },
  changes: {
    title: "需求变更",
    desc: "记录变更影响评估和客户确认，控制需求扩散。",
    actions: [{ label: "新建变更", primary: true, action: () => toast("新建变更表单待接入") }],
    render: renderChanges,
  },
  risks: {
    title: "风险列表",
    desc: "识别、评估和跟踪项目风险，降低交付不确定性。",
    actions: [{ label: "添加风险", primary: true, action: () => toast("添加风险表单待接入") }],
    render: renderRisks,
  },
  documents: {
    title: "文档中心",
    desc: "集中管理项目资料、版本记录和客户可见范围。",
    actions: [{ label: "上传文档", primary: true, action: () => toast("上传文档待接入") }],
    render: renderDocuments,
  },
  customer: {
    title: "客户协同",
    desc: "客户查看项目进度，并确认需求、变更、里程碑和交付物。",
    actions: [{ label: "生成分享链接", primary: true, action: () => toast("分享链接已生成") }],
    render: renderCustomer,
  },
};

function statusClass(value) {
  if (["已完成", "已确认", "已解决", "已审核", "客户可见"].includes(value)) return "green";
  if (["进行中", "开发中", "功能需求", "开发"].includes(value)) return "blue";
  if (["待处理", "待评审", "待客户确认", "待确认", "测试中", "中", "暂停"].includes(value)) return "orange";
  if (["已延期", "延期", "高", "有风险", "待评估"].includes(value)) return "red";
  if (["设计", "非功能需求"].includes(value)) return "purple";
  return "";
}

function tag(value) {
  return `<span class="tag ${statusClass(value)}">${value}</span>`;
}

function progress(value) {
  return `<div class="progress"><i style="width:${value}%"></i></div>`;
}

function statCards(items) {
  return `<div class="stats-grid">${items.map((item) => `
    <div class="stat-card"><strong>${item.value}</strong><span>${item.label}</span></div>
  `).join("")}</div>`;
}

function filters(placeholders = []) {
  return `<div class="filters">
    ${placeholders.map((item, index) => index === 0
      ? `<input data-filter placeholder="${item}">`
      : `<select><option>${item}</option></select>`).join("")}
  </div>`;
}

function dataTable(columns, rows, rowClick) {
  return `<div class="panel">
    <header><span>数据列表</span><button class="button">批量操作</button></header>
    <div class="table-wrap">
      <table>
        <thead><tr>${columns.map((column) => `<th>${column.label}</th>`).join("")}<th>操作</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => `<tr>
            ${columns.map((column) => `<td>${column.render ? column.render(row) : row[column.key]}</td>`).join("")}
            <td><button class="button" data-detail="${rowClick}:${index}">查看</button></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderDashboard() {
  return `
    ${statCards([
      { value: "18", label: "进行中项目" },
      { value: "6", label: "今日到期任务" },
      { value: "4", label: "待评估变更" },
      { value: "3", label: "待客户确认" },
    ])}
    <div class="grid-2">
      <div class="panel">
        <header><span>我的任务</span><button class="button" data-page="tasks">查看全部</button></header>
        <div class="table-wrap">
          <table>
            <thead><tr><th>任务编号</th><th>任务标题</th><th>所属项目</th><th>状态</th><th>计划结束</th><th>进度</th></tr></thead>
            <tbody>${tasks.slice(0, 4).map((task) => `<tr><td>${task.no}</td><td>${task.title}</td><td>${task.project}</td><td>${tag(task.status)}</td><td>${task.end}</td><td>${progress(task.progress)}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <header><span>风险与确认</span><span>${tag("待处理")}</span></header>
        <div class="panel-body list">
          ${confirmations.map((item) => `<div class="list-item"><strong>${item.title}</strong><span>${item.type}，${item.impact}</span></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="panel">
      <header><span>项目健康度</span><button class="button" data-page="projects">进入项目</button></header>
      <div class="table-wrap">
        <table>
          <thead><tr><th>项目编号</th><th>项目名称</th><th>客户</th><th>项目经理</th><th>状态</th><th>风险数</th><th>进度</th></tr></thead>
          <tbody>${projects.map((item) => `<tr><td>${item.no}</td><td>${item.name}</td><td>${item.customer}</td><td>${item.manager}</td><td>${tag(item.status)}</td><td>${item.risks}</td><td>${progress(item.progress)}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderProjects() {
  return `
    <section class="project-filter-panel">
      <label><span>项目名称</span><input data-filter placeholder="请输入项目名称"></label>
      <label><span>项目状态</span><select><option>全部状态</option><option>进行中</option><option>延期</option><option>已完成</option><option>暂停</option></select></label>
      <label><span>项目经理</span><select><option>全部</option><option>张伟</option><option>李丽</option><option>王芳</option></select></label>
      <label><span>客户名称</span><select><option>全部</option><option>XX科技有限公司</option><option>YY有限公司</option></select></label>
      <label><span>项目类型</span><select><option>全部</option><option>企业管理软件</option><option>业务系统</option><option>数据平台</option></select></label>
      <label><span>创建时间</span><input placeholder="选择时间范围"></label>
      <div class="project-filter-actions">
        <button class="button">重置</button>
        <button class="button primary">查询</button>
      </div>
    </section>
    <section class="project-toolbar">
      <strong>共 ${projects.length * 2} 个项目</strong>
      <div class="view-switch">
        <button class="active">▦ 卡片视图</button>
        <button>☷ 列表视图</button>
      </div>
    </section>
    <section class="project-card-grid">
      ${projects.map((project, index) => projectCard(project, index)).join("")}
    </section>
    <section class="project-pagination">
      <button class="button">‹</button>
      <button class="button primary">1</button>
      <button class="button">2</button>
      <button class="button">3</button>
      <button class="button">...</button>
      <button class="button">6</button>
      <select><option>12 条/页</option></select>
    </section>
  `;
}

function projectCard(project, index) {
  return `
    <article class="project-card ${project.tag}" data-project-card="${index}">
      <header>
        <div>
          <h3>${project.name}</h3>
          <p>${project.customer}</p>
        </div>
        ${tag(project.status)}
      </header>
      <div class="project-progress-row">
        <div class="project-card-progress"><i style="width:${project.progress}%"></i></div>
        <strong>${project.progress}%</strong>
      </div>
      <div class="project-roles">
        <span>项目经理</span><b>${avatar(project.manager)}${project.manager}</b>
        <span>开发负责人</span><b>${avatar(project.devLead)}${project.devLead}</b>
      </div>
      <div class="project-counts">
        <div><span>需求</span><strong>${project.requirementCount}</strong></div>
        <div><span>任务</span><strong>${project.taskCount}</strong></div>
        <div><span>缺陷</span><strong>${project.defectCount}</strong></div>
      </div>
      <footer>
        <span>▣ ${project.start}</span>
        <span>▣ ${project.end}</span>
      </footer>
    </article>
  `;
}

function avatar(name) {
  return `<i class="mini-avatar">${name.slice(0, 1)}</i>`;
}

function renderRequirements() {
  return `
    ${filters(["搜索需求名称、编号、创建人...", "项目：全部项目", "状态：全部状态", "优先级：全部优先级", "需求类型：全部类型"])}
    ${statCards([
      { value: "128", label: "全部需求" },
      { value: "36", label: "已完成，28.1%" },
      { value: "48", label: "开发中，37.5%" },
      { value: "16", label: "已延期，12.5%" },
    ])}
    ${dataTable([
      { key: "no", label: "需求编号" },
      { key: "name", label: "需求名称" },
      { key: "project", label: "所属项目" },
      { key: "type", label: "需求类型", render: (row) => tag(row.type) },
      { key: "priority", label: "优先级", render: (row) => tag(row.priority) },
      { key: "status", label: "状态", render: (row) => tag(row.status) },
      { key: "creator", label: "创建人" },
      { key: "createdAt", label: "创建时间" },
    ], requirements, "requirement")}
  `;
}

function renderTasks() {
  return `
    ${filters(["搜索任务标题、编号、项目名称...", "任务状态：全部", "优先级：全部", "任务类型：全部", "负责人：全部"])}
    ${statCards([
      { value: "256", label: "全部任务，较上周 +18" },
      { value: "48", label: "待开始，较上周 -5" },
      { value: "128", label: "进行中，较上周 +12" },
      { value: "6", label: "已延期，较上周 +2" },
    ])}
    ${dataTable([
      { key: "no", label: "任务编号" },
      { key: "title", label: "任务标题" },
      { key: "project", label: "所属项目" },
      { key: "type", label: "任务类型", render: (row) => tag(row.type) },
      { key: "priority", label: "优先级", render: (row) => tag(row.priority) },
      { key: "status", label: "状态", render: (row) => tag(row.status) },
      { key: "owner", label: "负责人" },
      { key: "start", label: "计划开始" },
      { key: "end", label: "计划结束" },
      { key: "progress", label: "进度", render: (row) => progress(row.progress) },
    ], tasks, "task")}
  `;
}

function renderChanges() {
  return `
    ${filters(["搜索变更标题、编号、提出人...", "项目：全部项目", "变更状态：全部", "变更来源：全部", "客户确认：全部"])}
    ${statCards([
      { value: "18", label: "全部变更" },
      { value: "5", label: "待评估" },
      { value: "4", label: "待客户确认" },
      { value: "9", label: "已关闭" },
    ])}
    ${dataTable([
      { key: "no", label: "变更编号" },
      { key: "title", label: "变更标题" },
      { key: "project", label: "所属项目" },
      { key: "requirement", label: "关联需求" },
      { key: "source", label: "变更来源" },
      { key: "proposer", label: "提出人" },
      { key: "days", label: "影响工期" },
      { key: "hours", label: "影响工时" },
      { key: "status", label: "状态", render: (row) => tag(row.status) },
      { key: "confirm", label: "客户确认", render: (row) => tag(row.confirm) },
      { key: "createdAt", label: "创建时间" },
    ], changes, "change")}
  `;
}

function renderRisks() {
  return `
    ${filters(["搜索风险标题、编号、关键字...", "风险状态：全部", "风险等级：全部", "所属项目：全部", "风险类别：全部"])}
    ${statCards([
      { value: "24", label: "全部风险，较上周 +3" },
      { value: "6", label: "待处理，较上周 +2" },
      { value: "10", label: "进行中，较上周 +1" },
      { value: "5", label: "已缓解，较上周 -1" },
    ])}
    ${dataTable([
      { key: "no", label: "风险编号" },
      { key: "title", label: "风险标题" },
      { key: "project", label: "所属项目" },
      { key: "level", label: "风险等级", render: (row) => tag(row.level) },
      { key: "category", label: "风险类别" },
      { key: "probability", label: "发生概率" },
      { key: "impact", label: "影响程度" },
      { key: "status", label: "风险状态", render: (row) => tag(row.status) },
      { key: "owner", label: "负责人" },
      { key: "date", label: "识别日期" },
    ], risks, "risk")}
  `;
}

function renderDocuments() {
  return `
    ${filters(["搜索文档名称、项目、关联对象...", "项目：全部项目", "文档类型：全部", "客户可见：全部", "更新时间"])}
    ${statCards([
      { value: "86", label: "全部文档" },
      { value: "24", label: "客户可见" },
      { value: "18", label: "本周更新" },
      { value: "7", label: "待归档" },
    ])}
    ${dataTable([
      { key: "name", label: "文件名称" },
      { key: "project", label: "所属项目" },
      { key: "type", label: "文档类型" },
      { key: "version", label: "版本" },
      { key: "related", label: "关联对象" },
      { key: "visible", label: "客户可见", render: (row) => tag(row.visible) },
      { key: "updated", label: "更新时间" },
    ], documents, "document")}
  `;
}

function renderCustomer() {
  return `
    ${statCards([
      { value: "12", label: "客户授权项目" },
      { value: "9", label: "待客户确认" },
      { value: "24", label: "客户可见文档" },
      { value: "5", label: "分享链接有效" },
    ])}
    <div class="grid-2">
      <div class="panel">
        <header><span>客户项目查看</span><button class="button primary">复制分享链接</button></header>
        <div class="panel-body">
          <div class="form-grid">
            <div class="field"><span>项目名称</span><strong>供应链管理平台</strong></div>
            <div class="field"><span>客户联系人</span><strong>王经理</strong></div>
            <div class="field"><span>整体进度</span><strong>68%</strong></div>
            <div class="field"><span>公开资料</span><strong>6 份</strong></div>
            <div class="field full-span"><span>客户可见范围</span><strong>项目进度、阶段里程碑、公开交付物、待确认事项</strong></div>
          </div>
        </div>
      </div>
      <div class="panel">
        <header><span>待确认事项</span><span>${tag("待确认")}</span></header>
        <div class="panel-body list">
          ${confirmations.map((item) => `<div class="list-item"><strong>${item.title}</strong><span>${item.project}，${item.impact}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function detailFields(fields) {
  return `<div class="form-grid">${fields.map(([label, value]) => `<div class="field"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

function openDrawer(type, index) {
  const map = {
    project: projects,
    requirement: requirements,
    task: tasks,
    change: changes,
    risk: risks,
    document: documents,
  };
  const item = map[type][Number(index)];
  const drawer = document.getElementById("drawer");
  document.getElementById("drawerEyebrow").textContent = type.toUpperCase();
  document.getElementById("drawerTitle").textContent = item.name || item.title || item.no;

  let body = "";
  if (type === "project") {
    body = detailFields([
      ["项目编号", item.no], ["客户", item.customer], ["项目类型", item.type], ["项目经理", item.manager],
      ["产品经理", item.product], ["开发负责人", item.devLead], ["状态", item.status], ["计划结束", item.end],
      ["风险数量", `${item.risks} 个`], ["文档数量", `${item.docs} 份`],
    ]);
  } else if (type === "requirement") {
    body = detailFields([
      ["需求编号", item.no], ["需求名称", item.name], ["需求类型", item.type], ["需求分类", item.category],
      ["需求子类", item.subcategory], ["影响范围", item.scope], ["目标版本", item.version], ["预计工时", item.hours],
      ["负责人", item.owner], ["创建时间", item.createdAt],
    ]) + `<div class="panel" style="margin-top:16px"><header><span>需求流程</span></header><div class="panel-body"><div class="timeline"><div class="step done"><b>1</b>提出需求</div><div class="step done"><b>2</b>需求评审</div><div class="step done"><b>3</b>产品评审</div><div class="step done"><b>4</b>开发中</div><div class="step"><b>5</b>测试中</div><div class="step"><b>6</b>已完成</div></div></div></div>`;
  } else if (type === "task") {
    body = detailFields([
      ["任务编号", item.no], ["任务标题", item.title], ["所属项目", item.project], ["任务类型", item.type],
      ["优先级", item.priority], ["状态", item.status], ["负责人", item.owner], ["计划开始", item.start],
      ["计划结束", item.end], ["进度", `${item.progress}%`],
    ]) + `<div class="panel" style="margin-top:16px"><header><span>工时记录</span></header><div class="table-wrap"><table><thead><tr><th>日期</th><th>成员</th><th>工时</th><th>工时类型</th><th>状态</th><th>备注</th><th>提交时间</th></tr></thead><tbody><tr><td>2024-05-21</td><td>${item.owner}</td><td>4.0</td><td>${item.type}</td><td>${tag("待审核")}</td><td>完成核心开发</td><td>18:30</td></tr><tr><td>2024-05-20</td><td>${item.owner}</td><td>4.0</td><td>${item.type}</td><td>${tag("已审核")}</td><td>完成结构设计</td><td>18:20</td></tr></tbody></table></div></div>`;
  } else {
    body = detailFields(Object.entries(item).map(([key, value]) => [labelOf(key), value]));
  }

  document.getElementById("drawerBody").innerHTML = body;
  drawer.hidden = false;
}

function labelOf(key) {
  const labels = {
    no: "编号", title: "标题", name: "名称", project: "所属项目", requirement: "关联需求",
    source: "来源", proposer: "提出人", days: "影响工期", hours: "影响工时", status: "状态",
    confirm: "客户确认", createdAt: "创建时间", customer: "客户", type: "类型", version: "版本",
    related: "关联对象", visible: "可见范围", updated: "更新时间", level: "等级", category: "类别",
    probability: "发生概率", impact: "影响程度", owner: "负责人", date: "日期",
  };
  return labels[key] || key;
}

function setupNav() {
  const nav = document.getElementById("mainNav");
  nav.innerHTML = navItems.map((item) => `<button class="nav-item" data-page="${item.key}"><span>${item.icon}</span>${item.label}</button>`).join("");
}

function render() {
  const page = pages[state.page];
  const descNode = document.getElementById("pageDesc");
  document.getElementById("breadcrumb").textContent = page.title;
  document.getElementById("pageTitle").textContent = page.title;
  descNode.textContent = page.desc;
  descNode.hidden = !page.desc;
  document.getElementById("pageActions").innerHTML = page.actions.map((action, index) => `<button class="button ${action.primary ? "primary" : ""}" data-action="${index}">${action.label}</button>`).join("");
  document.getElementById("content").innerHTML = page.render();
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.page === state.page));
}

function toast(message) {
  const toastNode = document.getElementById("toast");
  toastNode.textContent = message;
  toastNode.hidden = false;
  window.clearTimeout(toastNode._timer);
  toastNode._timer = window.setTimeout(() => toastNode.hidden = true, 1800);
}

function showApp() {
  document.body.classList.remove("login-view");
  document.getElementById("loginPage").hidden = true;
  document.getElementById("appShell").hidden = false;
  setupNav();
  render();
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showApp();
  toast("登录成功");
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  document.getElementById("appShell").hidden = true;
  document.getElementById("loginPage").hidden = false;
  document.body.classList.add("login-view");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.body.classList.toggle("sidebar-open");
});

document.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    state.page = pageButton.dataset.page;
    document.body.classList.remove("sidebar-open");
    render();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    pages[state.page].actions[Number(actionButton.dataset.action)].action();
    return;
  }

  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) {
    const [type, index] = detailButton.dataset.detail.split(":");
    openDrawer(type, index);
    return;
  }

  const projectCardButton = event.target.closest("[data-project-card]");
  if (projectCardButton) {
    openDrawer("project", projectCardButton.dataset.projectCard);
    return;
  }

  if (event.target.closest("[data-close-drawer]")) {
    document.getElementById("drawer").hidden = true;
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-filter]")) {
    toast(`筛选：${event.target.value || "全部"}`);
  }
});

document.getElementById("aiAssistant").addEventListener("click", () => {
  toast("AI 助手：发现 3 个项目存在延期风险");
});
