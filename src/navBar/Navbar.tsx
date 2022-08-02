import React from 'react';
import s from "./NavBar.module.scss"

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__logo}>CV</div>
            <nav>
                <ul className={s.navbar__linksWrapper}>
                    <li className={s.navbar__linkContainer}>
                        <a href="#" className={s.navbar__link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.5703 9.38694L12.3316 1.89038C12.1342 1.74585 11.8659 1.74585 11.6686 1.89038L1.42981 9.38694C1.17972 9.57008 1.12538 9.92125 1.30852 10.1713C1.49165 10.4214 1.84286 10.4757 2.09291 10.2926L12.0001 3.03876L21.9072 10.2926C22.0071 10.3658 22.1232 10.401 22.2383 10.401C22.4111 10.401 22.5816 10.3215 22.6915 10.1713C22.8747 9.92125 22.8204 9.57008 22.5703 9.38694Z"
                                    fill="white" stroke="white" strokeWidth="0.4"/>
                                <path
                                    d="M20.7303 10.9004C20.386 10.9004 20.1068 11.1796 20.1068 11.524V21.4497H15.1182V16.0316C15.1182 14.3122 13.7194 12.9135 12.0001 12.9135C10.2808 12.9135 8.88198 14.3123 8.88198 16.0316V21.4498H3.8934V11.524C3.8934 11.1796 3.61416 10.9004 3.26982 10.9004C2.92547 10.9004 2.64624 11.1796 2.64624 11.524V22.0734C2.64624 22.4178 2.92547 22.697 3.26982 22.697H9.50555C9.83349 22.697 10.1019 22.4436 10.1267 22.1219C10.1282 22.1074 10.1291 22.0914 10.1291 22.0734V16.0317C10.1291 15 10.9684 14.1607 12.0001 14.1607C13.0318 14.1607 13.8711 15 13.8711 16.0317V22.0734C13.8711 22.0913 13.872 22.107 13.8735 22.1214C13.8981 22.4433 14.1665 22.697 14.4946 22.697H20.7304C21.0748 22.697 21.354 22.4178 21.354 22.0734V11.524C21.3539 11.1796 21.0747 10.9004 20.7303 10.9004Z"
                                    fill="white" stroke="white" strokeWidth="0.4"/>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li className={s.navbar__linkContainer}>
                        <a href="#" className={s.navbar__link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M20.0989 21.2375V23.6C20.0989 23.8209 19.9199 24 19.699 24C19.4781 24 19.2991 23.8209 19.2991 23.6V21.2375C19.2991 19.398 17.8105 17.9093 15.9708 17.9094C15.1004 17.9094 14.3107 17.466 13.8582 16.7231C13.7433 16.5345 13.803 16.2884 13.9917 16.1735C14.1803 16.0586 14.4264 16.1184 14.5413 16.3071C14.8474 16.8095 15.3818 17.1095 15.9708 17.1095C18.2524 17.1094 20.0989 18.9558 20.0989 21.2375V21.2375ZM13.1196 17.2284C13.1666 17.4442 13.0298 17.6573 12.814 17.7043C11.7614 17.9336 10.6909 17.7041 9.83854 17.1223C8.99475 18.0265 7.88 17.9094 8.02923 17.9094C6.18972 17.9093 4.70102 19.3978 4.70102 21.2375V23.6C4.70102 23.8209 4.52194 24 4.30107 24C4.0802 24 3.90112 23.8209 3.90112 23.6V21.2375C3.90112 18.956 5.74733 17.1095 8.02913 17.1095C8.95211 17.1095 9.70036 16.3658 9.70036 15.4426V15.3373C7.95464 14.5025 6.7293 12.7484 6.65461 10.7057C5.93621 10.533 5.40093 9.89 5.40093 9.12495V7.05157C5.37908 6.0367 5.52976 3.49489 7.38307 1.70842C9.67151 -0.49759 13.3414 -0.357458 16.04 0.941621C16.303 1.06835 16.3429 1.42371 16.1245 1.60773C17.4916 1.94119 18.6704 2.78158 19.4278 3.98432C19.4669 4.04626 19.5385 4.1435 19.5198 4.29863C19.5082 4.39517 19.4794 4.47686 19.405 4.55235C18.9176 5.04668 18.6492 5.70175 18.6492 6.3969V9.12505C18.6492 9.34592 18.4701 9.52499 18.2492 9.52499C18.0284 9.52499 17.8493 9.34592 17.8493 9.12505V6.3969C17.8493 5.59516 18.1232 4.83416 18.6263 4.22284C17.8595 3.12618 16.6631 2.42088 15.3101 2.276L14.6072 2.20071C14.1961 2.15671 14.1155 1.59044 14.4975 1.43321L14.8172 1.30157C10.6534 -0.149985 6.20077 1.46285 6.20077 7.04722V9.12495C6.20077 9.4423 6.38355 9.71812 6.65071 9.85665V7.26384C6.65071 5.72014 7.90665 4.46421 9.45034 4.46421H14.5497C16.0934 4.46421 17.3493 5.72004 17.3493 7.26369V10.5384C17.3493 14.0167 13.9504 16.6586 10.4917 15.6404C10.4692 15.9258 10.3982 16.2011 10.2824 16.4571C10.9552 16.9191 11.8049 17.1055 12.6436 16.9227C12.8594 16.8757 13.0725 17.0126 13.1196 17.2284V17.2284ZM12 15.0574C14.5086 15.0574 16.5494 13.0166 16.5494 10.508V7.26369C16.5494 6.16114 15.6523 5.2641 14.5497 5.2641H9.45034C8.34769 5.2641 7.45061 6.16119 7.45061 7.26384V10.508C7.45061 13.0166 9.49144 15.0574 12 15.0574ZM16.0495 21.9503H14.8496C14.6288 21.9503 14.4497 22.1293 14.4497 22.3502C14.4497 22.5711 14.6288 22.7502 14.8496 22.7502H16.0495C16.2703 22.7502 16.4494 22.5711 16.4494 22.3502C16.4494 22.1293 16.2703 21.9503 16.0495 21.9503Z"
                                        fill="white" stroke="white" strokeWidth="0.4"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            About
                        </a>
                    </li>
                    <li className={s.navbar__linkContainer}>
                        <a href="#" className={s.navbar__link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M22.7654 9.21727L20.7008 9.0183C20.4817 8.13929 20.128 7.29936 19.6525 6.52817L20.9685 4.93946C21.0978 4.78357 21.0871 4.55511 20.944 4.41206L18.7109 2.17874C18.5678 2.03569 18.3394 2.02515 18.1835 2.15423L16.5936 3.47062C15.8211 2.99857 14.9821 2.64505 14.1046 2.42195L13.9055 0.354474C13.8861 0.153395 13.717 0 13.515 0H10.463C10.261 0 10.0921 0.153395 10.0727 0.354474L9.87336 2.42195C8.99589 2.64486 8.15691 2.99857 7.38439 3.47062L5.79452 2.15384C5.63883 2.02477 5.41037 2.0353 5.26712 2.17836L3.034 4.41186C2.89094 4.55511 2.88022 4.78357 3.00948 4.93946L4.32511 6.52798C3.84923 7.29917 3.49533 8.13929 3.27606 9.01849L1.2126 9.21765C1.01191 9.23719 0.859278 9.40628 0.860236 9.60794V12.7739C0.859087 12.9753 1.01172 13.1446 1.21241 13.1642L3.27835 13.3633C3.50107 14.2406 3.8544 15.0798 4.32626 15.8523L3.00929 17.442C2.87428 17.6049 2.89286 17.8457 3.05142 17.986L4.74527 19.4842C4.82896 19.5583 4.94042 19.5931 5.05168 19.5799C5.16275 19.5665 5.26291 19.5064 5.32687 19.4147L7.76127 15.9216C7.86985 15.7657 7.85108 15.5543 7.71665 15.4199C5.38107 13.0843 5.38087 9.29732 7.71665 6.96155C10.0524 4.62577 13.8394 4.62577 16.1752 6.96155C18.5109 9.29732 18.5109 13.0843 16.1752 15.4199C16.039 15.556 16.0218 15.7707 16.1344 15.9268L18.6544 19.4196C18.7191 19.5094 18.8189 19.5677 18.929 19.5799C19.0391 19.5922 19.1492 19.5573 19.2322 19.484L20.9266 17.9864C21.0851 17.8462 21.1039 17.6053 20.9687 17.4422L19.6521 15.8523C20.1242 15.0798 20.4777 14.2408 20.7006 13.3633L22.7654 13.1642C22.9661 13.1446 23.1187 12.9753 23.1176 12.7739V9.60755C23.1185 9.40609 22.9661 9.2368 22.7654 9.21727V9.21727ZM22.3332 12.4175L20.344 12.6094C20.1751 12.6257 20.0361 12.7492 19.9999 12.915C19.7837 13.8957 19.3905 14.8287 18.84 15.6686C18.7457 15.8127 18.7565 16.0013 18.8662 16.1336L20.1225 17.6501L19.0372 18.6096L16.9609 15.7317C19.3651 13.0795 19.2881 8.96506 16.7298 6.40676C14.092 3.76899 9.79983 3.76899 7.16205 6.40676C4.60241 8.9664 4.52677 13.0839 6.93454 15.7357L4.93505 18.6048L3.85536 17.6499L5.11143 16.1334C5.22116 16.0007 5.23169 15.8123 5.13747 15.6683C4.58671 14.8285 4.19336 13.8955 3.97658 12.915C3.94096 12.7494 3.80231 12.6258 3.63379 12.6094L1.64464 12.4175V9.96413L3.63379 9.77206C3.80346 9.75559 3.94287 9.6313 3.9783 9.4645C4.18934 8.48362 4.5825 7.55119 5.13709 6.71508C5.23246 6.57088 5.22212 6.38129 5.11181 6.24819L3.84118 4.71406L5.56931 2.98574L7.10345 4.25617C7.23597 4.3661 7.4246 4.37663 7.56842 4.28222C8.40817 3.73145 9.34117 3.3381 10.3217 3.12151C10.4877 3.08474 10.611 2.94533 10.6273 2.77623L10.8192 0.784591H13.1588L13.3509 2.77623C13.3672 2.94533 13.4905 3.08474 13.6563 3.12151C14.637 3.3381 15.57 3.73164 16.4098 4.28241C16.5536 4.37682 16.7422 4.36629 16.8747 4.25636L18.4087 2.98593L20.1368 4.71406L18.8664 6.24819C18.7563 6.38129 18.7461 6.57088 18.8415 6.71489C19.3963 7.55099 19.7894 8.48362 20.0007 9.4645C20.0355 9.63111 20.1745 9.75559 20.3438 9.77206L22.3332 9.96394V12.4175Z"
                                        fill="white" stroke="white" strokeWidth="0.4"/>
                                    <path
                                        d="M13.3566 18.0928V12.1376C14.3452 11.5667 14.9942 10.483 14.9942 9.36613C14.9942 7.84004 14.1215 6.72855 12.6598 6.39323C12.538 6.36527 12.4104 6.39686 12.3158 6.47825C12.2214 6.55983 12.1712 6.68144 12.1808 6.80592L12.3105 8.47028C11.983 8.64205 11.5923 8.64225 11.2647 8.47066L11.4041 6.79711C11.4148 6.66842 11.3616 6.54279 11.2616 6.46102C11.1616 6.37925 11.028 6.35186 10.9041 6.38786C9.56716 6.77508 8.73431 7.92487 8.73431 9.38892C8.73431 10.7327 9.43943 11.8197 10.616 12.2908V18.223C9.78261 18.715 8.97963 19.7133 8.99227 20.9835C8.99227 22.4972 9.85519 23.6161 11.298 23.9771C11.4205 24.0077 11.5502 23.9777 11.6467 23.8963C11.7432 23.8149 11.7947 23.6921 11.7852 23.5663L11.6561 21.9022C11.9834 21.7304 12.3742 21.7302 12.7019 21.9016L12.5625 23.5753C12.5517 23.704 12.605 23.8296 12.705 23.9114C12.8049 23.9932 12.9386 24.0206 13.0625 23.9846C14.3929 23.5991 15.2274 22.455 15.2408 20.9946C15.241 19.6507 14.5267 18.5639 13.3566 18.0928V18.0928ZM13.3986 22.988L13.5029 21.7338C13.5141 21.6004 13.4564 21.4705 13.3499 21.3893L13.3352 21.378C12.6446 20.8539 11.6879 20.8602 11.0044 21.3933C10.9018 21.4743 10.8462 21.6013 10.8564 21.7317L10.9565 23.0219C10.2014 22.6456 9.77916 21.9267 9.77916 20.9797C9.76901 19.9479 10.4956 19.1345 11.1771 18.8151C11.3144 18.7504 11.4016 18.6117 11.4006 18.4599V12.0129C11.4016 11.8404 11.2892 11.6877 11.1241 11.6374C10.1338 11.3384 9.52005 10.4769 9.52005 9.38854C9.52005 8.51202 9.90996 7.78737 10.5674 7.38407L10.4634 8.63822C10.4523 8.77189 10.5101 8.90193 10.617 8.98293L10.6315 8.99404C11.3211 9.51799 12.2769 9.51244 12.9602 8.98063C12.9637 8.97795 12.9675 8.97489 12.9708 8.97221C13.0684 8.89082 13.1205 8.76711 13.1107 8.64033L13.0093 7.33638C13.7795 7.69737 14.2102 8.41302 14.2102 9.36632C14.2102 10.2549 13.629 11.1515 12.7967 11.5468C12.6599 11.6117 12.5728 11.7496 12.5728 11.9011V18.3704C12.5728 18.5434 12.6862 18.6958 12.8516 18.7458C13.8421 19.0449 14.457 19.9065 14.457 20.9912C14.4486 21.8639 14.0554 22.586 13.3988 22.988H13.3986Z"
                                        fill="white" stroke="white" strokeWidth="0.4"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" rx="6" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Service
                        </a>
                    </li>
                    <li className={s.navbar__linkContainer}>
                        <a href="#" className={s.navbar__link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.00012 0.000140625V22H3V24L3.99998 23.3333L4.99997 24V22H22.9998V0L1.00012 0.000140625ZM3.00014 20V2.00011H17.6666L17.6668 20H3.00014V20ZM20.9999 2.00002V6.66666H19.6666L19.6666 2.00002H20.9999ZM20.9999 8.66663V13.3333H19.6667L19.6667 8.66663H20.9999V8.66663ZM20.9999 20H19.6667V15.3333H20.9999V20Z"
                                    fill="white"/>
                                <path
                                    d="M6.3322 8.32701C6.28195 8.20274 6.21272 8.09226 6.12473 7.99579C6.03675 7.89937 5.93119 7.82118 5.80828 7.76104C5.68524 7.70104 5.55113 7.6709 5.40581 7.6709H4.12299V10.6473H4.94044V9.7334H5.42672C5.57203 9.7334 5.70553 9.70471 5.82703 9.64747C5.94863 9.59029 6.05198 9.51332 6.13725 9.41694C6.22247 9.32052 6.2888 9.21013 6.33638 9.08573C6.38386 8.96141 6.40758 8.83354 6.40758 8.70215C6.40767 8.57643 6.3825 8.45141 6.3322 8.32701ZM5.51264 8.95162C5.46933 8.99774 5.42259 9.0208 5.37225 9.0208H4.94044V8.38354H5.35125C5.40159 8.38354 5.45184 8.40594 5.50219 8.45066C5.55253 8.49538 5.57766 8.57924 5.57766 8.70215C5.57756 8.82243 5.55591 8.90554 5.51264 8.95162Z"
                                    fill="white"/>
                                <path
                                    d="M9.54953 8.61425C9.47828 8.43256 9.37699 8.27052 9.24569 8.12797C9.1142 7.98538 8.95642 7.87091 8.77197 7.78423C8.58752 7.69766 8.38211 7.6543 8.15575 7.6543C7.93497 7.6543 7.73167 7.6955 7.54577 7.77791C7.35991 7.86036 7.19922 7.97075 7.06375 8.10913C6.92814 8.24745 6.82267 8.40753 6.7472 8.58913C6.67174 8.77081 6.63409 8.95944 6.63409 9.155C6.63409 9.34789 6.67038 9.53511 6.74308 9.71675C6.81569 9.89849 6.91769 10.0598 7.04908 10.201C7.18042 10.3422 7.33834 10.456 7.52275 10.5426C7.7072 10.6293 7.9127 10.6726 8.13902 10.6726C8.35975 10.6726 8.563 10.6306 8.74886 10.5469C8.93472 10.463 9.09471 10.3519 9.22886 10.2136C9.36297 10.0753 9.46778 9.91592 9.54325 9.73564C9.61872 9.55536 9.65646 9.36749 9.65646 9.17183C9.65646 8.9817 9.62078 8.79594 9.54953 8.61425ZM8.7866 9.44427C8.75997 9.53933 8.71952 9.62384 8.66505 9.69791C8.61053 9.77197 8.53994 9.83206 8.45331 9.87809C8.36664 9.92422 8.26464 9.94728 8.14727 9.94728C8.02989 9.94728 7.9286 9.92492 7.84333 9.8802C7.75806 9.83549 7.68752 9.7768 7.6316 9.70405C7.57567 9.63139 7.53372 9.54833 7.50588 9.45467C7.47789 9.36106 7.46392 9.26394 7.46392 9.16334C7.46392 9.06556 7.47714 8.96989 7.50381 8.87614C7.5303 8.78263 7.57155 8.69872 7.62742 8.62466C7.6833 8.55064 7.75385 8.4912 7.83916 8.44644C7.92438 8.40177 8.02567 8.37936 8.14309 8.37936C8.2577 8.37936 8.35755 8.40102 8.44281 8.44438C8.52803 8.48769 8.59928 8.54497 8.65661 8.61627C8.7138 8.68752 8.75645 8.77002 8.78449 8.86358C8.81233 8.95723 8.82644 9.05431 8.82644 9.15491C8.82644 9.25288 8.81313 9.34925 8.7866 9.44427Z"
                                    fill="white"/>
                                <path
                                    d="M12.0082 9.55321C12.1424 9.45819 12.2472 9.33594 12.3227 9.18641C12.3982 9.03693 12.4358 8.87554 12.4358 8.70219C12.4358 8.57638 12.4107 8.45141 12.3604 8.32701C12.31 8.20274 12.2409 8.09226 12.1529 7.99579C12.0649 7.89937 11.9594 7.82118 11.8364 7.76104C11.7134 7.70104 11.5792 7.6709 11.434 7.6709H10.0674V10.6473H10.8848V9.7334H11.1908L11.7149 10.6473H12.6371L12.0082 9.55321ZM11.5408 8.93699C11.4975 8.99291 11.4507 9.02085 11.4004 9.02085H10.8848V8.38363H11.3794C11.4298 8.38363 11.48 8.41091 11.5304 8.46543C11.5807 8.51994 11.6058 8.59888 11.6058 8.70229C11.6058 8.80288 11.5841 8.88121 11.5408 8.93699Z"
                                    fill="white"/>
                                <path d="M12.704 7.6709V8.38359H13.5634V10.6473H14.3808V8.38359H15.2359V7.6709H12.704Z"
                                      fill="white"/>
                                <path
                                    d="M6.16453 12.0571V11.3445H4.12299V14.3209H4.94044V13.2141H5.93817V12.5517H4.94044V12.0571H6.16453Z"
                                    fill="white"/>
                                <path
                                    d="M9.26026 12.2878C9.18901 12.1061 9.08771 11.9441 8.95642 11.8016C8.82493 11.659 8.66715 11.5444 8.4826 11.4578C8.29815 11.3712 8.09274 11.3279 7.86638 11.3279C7.6456 11.3279 7.44231 11.3691 7.25645 11.4515C7.07059 11.5339 6.9099 11.6444 6.77443 11.7827C6.63882 11.921 6.53335 12.0811 6.45788 12.2627C6.38241 12.4444 6.34473 12.633 6.34473 12.8286C6.34473 13.0214 6.38101 13.2087 6.45371 13.3903C6.52632 13.5721 6.62832 13.7334 6.75971 13.8746C6.89105 14.0157 7.04898 14.1296 7.23338 14.2162C7.41784 14.3029 7.62334 14.3462 7.84965 14.3462C8.07038 14.3462 8.27363 14.3042 8.45949 14.2204C8.64535 14.1366 8.80543 14.0255 8.93949 13.8872C9.07365 13.7488 9.17842 13.5895 9.25388 13.4092C9.32935 13.2289 9.36709 13.0411 9.36709 12.8454C9.36723 12.6553 9.33156 12.4695 9.26026 12.2878ZM8.49732 13.1179C8.47074 13.2129 8.43024 13.2974 8.37578 13.3715C8.32126 13.4456 8.25067 13.5057 8.16404 13.5517C8.07737 13.5979 7.97537 13.6209 7.85799 13.6209C7.74057 13.6209 7.63932 13.5986 7.55406 13.5538C7.46879 13.5091 7.39824 13.4504 7.34232 13.3777C7.2864 13.305 7.24445 13.222 7.2166 13.1283C7.18862 13.0347 7.17465 12.9376 7.17465 12.837C7.17465 12.7392 7.18787 12.6435 7.21449 12.5498C7.24098 12.4563 7.28223 12.3724 7.3381 12.2983C7.39398 12.2243 7.46457 12.1648 7.54984 12.1201C7.63506 12.0754 7.73635 12.053 7.85377 12.053C7.96838 12.053 8.06823 12.0746 8.15349 12.118C8.23871 12.1613 8.30996 12.2186 8.36729 12.2899C8.42448 12.3611 8.46713 12.4436 8.49517 12.5372C8.52301 12.6309 8.53712 12.7279 8.53712 12.8285C8.53721 12.9264 8.52385 13.0228 8.49732 13.1179Z"
                                    fill="white"/>
                                <path d="M10.5955 13.6082V11.3445H9.77802V14.3209H11.9453V13.6082H10.5955Z"
                                      fill="white"/>
                                <path d="M13.1108 11.3447H12.2933V14.3211H13.1108V11.3447Z" fill="white"/>
                                <path
                                    d="M16.4369 12.2878C16.3657 12.1061 16.2643 11.9441 16.133 11.8016C16.0015 11.659 15.8437 11.5444 15.6593 11.4578C15.4748 11.3712 15.2694 11.3279 15.0431 11.3279C14.8223 11.3279 14.619 11.3691 14.4331 11.4515C14.2472 11.5339 14.0865 11.6443 13.9511 11.7827C13.8155 11.921 13.71 12.0811 13.6345 12.2627C13.559 12.4444 13.5214 12.633 13.5214 12.8286C13.5214 13.0215 13.5576 13.2087 13.6303 13.3903C13.703 13.5721 13.805 13.7334 13.9363 13.8746C14.0677 14.0157 14.2256 14.1296 14.41 14.2162C14.5945 14.3029 14.8 14.3462 15.0263 14.3462C15.2471 14.3462 15.4503 14.3042 15.6362 14.2204C15.822 14.1366 15.982 14.0255 16.1162 13.8872C16.2503 13.7488 16.3551 13.5895 16.4306 13.4092C16.506 13.2289 16.5438 13.0411 16.5438 12.8454C16.5439 12.6553 16.5082 12.4695 16.4369 12.2878ZM15.6741 13.1179C15.6475 13.2129 15.607 13.2974 15.5525 13.3715C15.498 13.4456 15.4274 13.5057 15.3408 13.5517C15.2541 13.5978 15.1521 13.6209 15.0348 13.6209C14.9174 13.6209 14.8161 13.5985 14.7308 13.5538C14.6456 13.5091 14.575 13.4504 14.5191 13.3776C14.4632 13.305 14.4213 13.2219 14.3934 13.1283C14.3654 13.0346 14.3515 12.9375 14.3515 12.8369C14.3515 12.7391 14.3647 12.6435 14.3914 12.5497C14.4178 12.4562 14.4591 12.3724 14.515 12.2982C14.5708 12.2242 14.6414 12.1648 14.7267 12.12C14.8119 12.0754 14.9132 12.0529 15.0306 12.0529C15.1453 12.0529 15.2451 12.0746 15.3304 12.118C15.4156 12.1613 15.4868 12.2186 15.5442 12.2899C15.6013 12.3611 15.644 12.4436 15.672 12.5372C15.6999 12.6308 15.714 12.7279 15.714 12.8285C15.7139 12.9264 15.7006 13.0228 15.6741 13.1179Z"
                                    fill="white"/>
                            </svg>
                            Portfolio
                        </a>
                    </li>
                    <li className={s.navbar__linkContainer}>
                        <a href="#" className={s.navbar__link}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="white"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.16846 14.6998C5.41908 15.1672 4.20159 16.7509 4.19982 18.5613V18.6229C3.95948 18.675 3.75533 18.8325 3.64384 19.0516L3.04787 20.2329L1.71192 20.4225C1.39777 20.4651 1.13622 20.6848 1.03997 20.9868C0.942653 21.2847 1.02639 21.6119 1.25475 21.8266L2.21589 22.7423L1.9891 24.036C1.93414 24.3423 2.05925 24.653 2.31108 24.8359C2.56677 25.0258 2.90851 25.0529 3.19105 24.9059L4.38819 24.2904L5.58533 24.9059C5.86727 25.0524 6.20815 25.0252 6.46329 24.8359C6.7152 24.6531 6.84042 24.3424 6.78566 24.036L6.67366 23.3962H8.88875L8.84875 23.6117C8.77077 24.0498 8.94965 24.494 9.30954 24.7559C9.51937 24.9119 9.77399 24.9961 10.0355 24.9958C10.2295 24.9956 10.4207 24.9494 10.5935 24.861L13.0054 23.6381L15.4052 24.861C15.8184 25.0737 16.3167 25.0324 16.6892 24.7546C17.0485 24.4929 17.2272 24.0494 17.1496 23.6117L17.1096 23.3962H19.3255L19.2135 24.036C19.1587 24.3424 19.284 24.6531 19.5359 24.8359C19.7915 25.026 20.1333 25.0531 20.4158 24.9059L21.613 24.2904L22.8101 24.9059C23.0926 25.0531 23.4344 25.0259 23.6901 24.8359C23.9412 24.6526 24.0655 24.342 24.0101 24.036L23.7833 22.744L24.7452 21.8266C24.9736 21.6119 25.0573 21.2847 24.96 20.9868C24.8637 20.6845 24.6017 20.4648 24.2872 20.4225L22.9513 20.2329L22.3553 19.0516C22.2437 18.8324 22.0394 18.675 21.799 18.6229V18.5613C21.7972 16.7509 20.5797 15.1672 18.8303 14.6998L15.666 13.8556C15.3913 13.2631 15.2639 12.6131 15.2945 11.9608C15.6009 11.7029 15.8749 11.4569 16.0884 11.2582C16.4137 10.9552 16.5986 10.5309 16.5992 10.0865V9.74895C17.2324 9.5875 17.7029 9.05603 17.7862 8.40801C17.8696 7.76 17.5489 7.12679 16.9772 6.81042C17.2652 6.39765 17.4131 5.90342 17.3992 5.40037C17.3908 3.98858 16.4746 2.74258 15.1293 2.31349C15.1911 2.2537 15.2594 2.20096 15.3329 2.15633C15.469 2.08552 15.5527 1.94312 15.5481 1.78977C15.5436 1.63643 15.4518 1.49918 15.3117 1.43652C14.5797 1.13176 13.7921 0.983574 12.9994 1.00144C11.7481 0.983968 10.5793 1.62352 9.91953 2.68665C9.05598 3.12425 8.53665 4.0346 8.5996 5.00051C8.60539 5.62306 8.78553 6.23152 9.11956 6.75689C8.50882 7.04224 8.14322 7.68042 8.20601 8.35149C8.2688 9.02257 8.74648 9.58187 9.39953 9.74899V10.0865C9.40013 10.5309 9.58507 10.9552 9.91032 11.2582C10.1239 11.4582 10.3979 11.7029 10.7043 11.9609C10.7345 12.6131 10.6071 13.263 10.3331 13.8556L7.16846 14.6998ZM5.93054 22.2365C5.78346 22.3763 5.71622 22.5805 5.75134 22.7803L5.99573 24.1744L6.3901 24.1056L5.95014 24.1932L4.67021 23.5349C4.49267 23.4433 4.28178 23.4433 4.10424 23.5349L2.8243 24.1932L3.00708 24.5487L2.7775 24.1744L3.02228 22.7787C3.05696 22.5779 2.98842 22.3732 2.83989 22.2336L1.82474 21.2146L3.25588 21.0111C3.45551 20.9835 3.62888 20.8597 3.71986 20.68L4.38661 19.3971C4.4074 19.3971 4.41181 19.4067 4.41421 19.4115L5.05419 20.6796C5.14505 20.859 5.31787 20.9826 5.51699 21.0107L6.96612 21.2459L5.93054 22.2365ZM16.2132 24.116C16.0845 24.2131 15.9112 24.2271 15.7685 24.152L13.3686 22.9295C13.1366 22.8121 12.8626 22.8121 12.6306 22.9295L10.2308 24.152C10.0881 24.2275 9.91461 24.2135 9.786 24.116C9.67073 24.0351 9.61271 23.8947 9.63719 23.7561L10.0952 21.1671C10.1416 20.907 10.0532 20.6411 9.8604 20.4605L7.9197 18.6217C7.81376 18.5275 7.774 18.3792 7.81849 18.2446C7.86589 18.0985 7.99458 17.9938 8.14728 17.9771L10.8308 17.5992C11.0899 17.5636 11.3153 17.4037 11.4343 17.1709L12.6343 14.815C12.7077 14.6813 12.8481 14.5983 13.0006 14.5983C13.1532 14.5983 13.2936 14.6813 13.367 14.815L14.567 17.1709C14.6865 17.4034 14.9119 17.5632 15.1709 17.5992L17.8544 17.9771C18.0071 17.9938 18.1358 18.0986 18.1832 18.2446C18.2277 18.3793 18.1879 18.5275 18.082 18.6217L16.1405 20.4557C15.9478 20.6362 15.8594 20.9019 15.9057 21.1619L16.3637 23.7513C16.3882 23.8905 16.3295 24.0314 16.2133 24.112V24.116H16.2132ZM11.9214 14.4507C11.6336 14.3693 11.3594 14.2458 11.1079 14.0839C11.3155 13.6062 11.4422 13.0972 11.4827 12.5779C11.5315 12.6143 11.5782 12.6519 11.6271 12.6875C11.9024 12.889 12.2346 12.998 12.5758 12.9986H13.423C13.7641 12.9981 14.0962 12.8891 14.3713 12.6875C14.4205 12.6519 14.4673 12.6139 14.5161 12.5779C14.5565 13.0972 14.6831 13.6062 14.8909 14.0839C14.6393 14.2458 14.3651 14.3693 14.0773 14.4507C13.8673 14.0497 13.4521 13.7984 12.9994 13.7984C12.5467 13.7984 12.1314 14.0497 11.9214 14.4507V14.4507ZM21.639 19.4119L22.279 20.68C22.3699 20.8594 22.5427 20.983 22.7417 21.0112L24.1913 21.2463L23.1589 22.2333C23.0113 22.3733 22.9434 22.5779 22.9781 22.7784L23.2229 24.1724L23.6169 24.1036L23.1769 24.1912L21.897 23.533C21.7194 23.4414 21.5085 23.4414 21.331 23.533L20.0511 24.1912L20.2339 24.5467L20.0047 24.1724L20.2487 22.7791C20.2841 22.5788 20.2168 22.374 20.0695 22.2337L19.0519 21.2147L20.483 21.0111C20.682 20.9832 20.8547 20.8596 20.9454 20.6804L21.6122 19.3971C21.6334 19.3971 21.639 19.4071 21.639 19.4119V19.4119ZM15.4937 14.6382L18.6243 15.4736C20.0236 15.847 20.9975 17.1134 20.999 18.5613V18.8652C20.9478 18.9211 20.9045 18.9836 20.8702 19.0512L20.2742 20.2329L18.9379 20.4225C18.6236 20.4649 18.3618 20.6844 18.2651 20.9863C18.1682 21.2842 18.2519 21.6113 18.4799 21.8261L19.2891 22.5964H16.9692L16.6892 21.0367L18.6307 19.2028C18.9584 18.8971 19.0806 18.43 18.9447 18.003C18.8044 17.5639 18.4227 17.2455 17.9655 17.186L15.2792 16.8081L14.4457 15.1713C14.8215 15.0512 15.1753 14.8711 15.4937 14.6382V14.6382ZM10.3259 3.38048C10.4258 3.3462 10.5086 3.27453 10.5567 3.18054C11.0591 2.31046 11.9947 1.78214 12.9994 1.80127C13.4616 1.79705 13.9225 1.84984 14.3717 1.95843C14.2699 2.08654 14.1835 2.22611 14.1141 2.37434C14.0617 2.48655 14.0642 2.61675 14.1209 2.72688C14.1777 2.83701 14.2822 2.91459 14.4041 2.93702C14.4933 2.95383 16.5992 3.37131 16.5992 5.40044C16.6024 5.63353 16.5582 5.86481 16.4692 6.0803C16.2619 5.66435 15.8373 5.40119 15.3725 5.40044H14.1993C13.5495 5.43642 12.9027 5.28689 12.3346 4.96934C11.9309 4.72834 11.4696 4.60094 10.9995 4.60062C10.2983 4.60436 9.69175 5.08986 9.53476 5.77314C9.44709 5.5249 9.40142 5.26379 9.39957 5.00051C9.39957 3.72598 10.2915 3.39249 10.3259 3.38048V3.38048ZM10.4551 10.6728C10.2923 10.5212 10.1997 10.3089 10.1995 10.0865V9.39944C10.1995 9.17859 10.0205 8.99955 9.79958 8.99955C9.43807 9.00045 9.12113 8.75811 9.02732 8.40904C8.93351 8.05996 9.08629 7.69148 9.39957 7.51109V7.79983C9.39957 8.02068 9.57865 8.19972 9.79954 8.19972C10.0204 8.19972 10.1995 8.02068 10.1995 7.79983V6.60012C10.1995 6.55092 10.2159 5.40041 10.9995 5.40041C11.3419 5.40186 11.6771 5.4988 11.9674 5.68033C12.649 6.05664 13.4216 6.23663 14.1993 6.20019H15.3725C15.5461 6.1985 15.7033 6.30296 15.7688 6.46374C15.7869 6.50707 15.7972 6.5532 15.7992 6.60012V7.79983C15.7992 8.02068 15.9783 8.19972 16.1992 8.19972C16.4201 8.19972 16.5992 8.02068 16.5992 7.79983V7.51109C16.9124 7.69148 17.0652 8.05996 16.9714 8.40904C16.8776 8.75811 16.5607 9.00045 16.1992 8.99955C15.9783 8.99955 15.7992 9.17859 15.7992 9.39944V10.0865C15.799 10.3089 15.7064 10.5212 15.5436 10.6728C15.0242 11.1601 14.4766 11.6165 13.9037 12.0396C13.7647 12.1424 13.5966 12.1984 13.4237 12.1996H12.5758C12.4029 12.1983 12.2348 12.1423 12.0958 12.0396C11.5227 11.6164 10.9749 11.16 10.4551 10.6728V10.6728ZM11.5535 15.1713L10.7195 16.8069L8.03607 17.1848C7.57882 17.2443 7.1972 17.5627 7.0569 18.0019C6.92096 18.4288 7.0432 18.8959 7.37089 19.2016L9.30919 21.0208L9.02882 22.5964H6.70894L7.51969 21.825C7.74775 21.6102 7.83136 21.2831 7.73448 20.9852C7.63779 20.6832 7.37601 20.4638 7.0617 20.4213L5.72575 20.2318L5.12938 19.05C5.09478 18.9829 5.05116 18.9207 4.99979 18.8653V18.5614C5.00101 17.113 5.97522 15.8462 7.37486 15.4729L10.5051 14.6382C10.8236 14.8711 11.1776 15.0512 11.5535 15.1713V15.1713Z"
                                    fill="white" stroke="white" strokeWidth="0.4"/>
                            </svg>
                            Hobbies
                        </a>
                    </li>
                    <li className={s.navbar__linkContainer}>
                        <a href="#" className={s.navbar__link}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M22.4003 3.99975H8.20025L7.28025 0.956151C7.06247 0.247252 6.31468 -0.154291 5.60345 0.0557509L3.56625 0.655751C3.34183 0.722132 3.13834 0.845303 2.97545 1.01335L0.680252 3.39055C0.507669 3.57091 0.388576 3.79567 0.336252 4.03975C0.102252 5.11975 -0.543748 9.03495 0.988252 14.0998C2.52025 19.1646 5.22825 22.0902 6.02425 22.8658C6.20261 23.0408 6.4259 23.1632 6.66945 23.2194L9.90665 23.9662C10.0067 23.9893 10.1091 24.001 10.2119 24.001C10.3424 24.0009 10.4722 23.9821 10.5975 23.9454L11.7247 23.613L12.6331 23.345C12.9789 23.2453 13.2699 23.0104 13.4403 22.6934C13.61 22.3817 13.6473 22.0148 13.5439 21.6754L13.0371 19.9998H22.4003C23.2839 19.9998 24.0003 19.2834 24.0003 18.3998V5.59975C24.0003 4.7161 23.2839 3.99975 22.4003 3.99975V3.99975ZM16.1003 11.8798L23.1511 5.33335C23.1828 5.41863 23.1994 5.50877 23.2003 5.59975V18.3998C23.1991 18.4855 23.1841 18.5704 23.1559 18.6514L16.1003 11.8798ZM22.4003 4.79975C22.4456 4.80042 22.4909 4.80497 22.5355 4.81335L14.1603 12.587C13.8534 12.8715 13.3791 12.8715 13.0723 12.587L7.31225 7.25455L7.73665 7.12935C8.08182 7.02901 8.37222 6.79424 8.54265 6.47775C8.71217 6.16626 8.74922 5.79966 8.64545 5.46055L8.44425 4.79975H22.4003ZM6.29385 16.4922C5.46804 15.4812 4.854 14.3145 4.48825 13.0614C3.97163 11.4824 3.90117 9.79142 4.28465 8.17495C4.29291 8.15315 4.31127 8.13673 4.33385 8.13095L6.41665 7.51695L11.1143 11.8642L6.29385 16.4922ZM12.7339 22.3126C12.6645 22.4411 12.5463 22.5363 12.4059 22.5766L11.8755 22.733L10.9015 19.5098C10.8621 19.3705 10.7507 19.2634 10.61 19.2296C10.4694 19.1957 10.3214 19.2405 10.2231 19.3466C10.1248 19.4527 10.0914 19.6037 10.1359 19.7414L11.1103 22.9598L10.3719 23.1774C10.279 23.2049 10.1806 23.208 10.0863 23.1862L6.84905 22.4398C6.74874 22.4163 6.65683 22.3657 6.58345 22.2934C5.82345 21.5514 3.22865 18.7502 1.75385 13.8686C0.279052 8.98695 0.894252 5.23975 1.11785 4.20855C1.13936 4.10959 1.18781 4.0185 1.25785 3.94535L3.55065 1.56935C3.61679 1.5008 3.69943 1.45039 3.79065 1.42295L4.53505 1.20375L5.50905 4.42655C5.56001 4.59537 5.71551 4.71089 5.89185 4.71095C5.93104 4.71115 5.97002 4.70535 6.00745 4.69375C6.21882 4.62985 6.33842 4.40676 6.27465 4.19535L5.30385 0.977751L5.82945 0.822951C6.11979 0.735432 6.42646 0.897959 6.51705 1.18735L7.87705 5.69135C7.91881 5.82643 7.9044 5.97263 7.83705 6.09695C7.76749 6.22542 7.64935 6.32065 7.50905 6.36135L6.97825 6.51775L6.82105 5.99775C6.75312 5.79165 6.53326 5.67731 6.32552 5.74004C6.11778 5.80278 5.99795 6.01971 6.05545 6.22895L6.21105 6.74415L4.10785 7.36415C3.81951 7.44841 3.59479 7.67508 3.51305 7.96415C3.09112 9.72521 3.16379 11.5686 3.72305 13.291C4.21421 15.0392 5.17548 16.6191 6.50225 17.859C6.72786 18.0579 7.04032 18.126 7.32825 18.039L9.43665 17.4174L9.59385 17.9374C9.63318 18.0766 9.74461 18.1837 9.88527 18.2175C10.0259 18.2514 10.1739 18.2066 10.2722 18.1005C10.3705 17.9944 10.4039 17.8434 10.3595 17.7058L10.2039 17.1906L10.7291 17.0358C11.0194 16.9489 11.3257 17.1112 11.4171 17.4002L12.7771 21.9046C12.8191 22.0405 12.8043 22.1877 12.7359 22.3126H12.7339ZM12.7951 19.1998L12.1823 17.1714C11.9641 16.4611 11.2144 16.0593 10.5023 16.271L7.10225 17.2734C7.07783 17.2807 7.05139 17.2759 7.03105 17.2606C6.97505 17.2114 6.91105 17.1502 6.83705 17.0806L11.7027 12.4086L12.5283 13.173C13.1431 13.7399 14.0902 13.7399 14.7051 13.173L15.5131 12.4226L22.5559 19.1826C22.5047 19.1934 22.4526 19.1992 22.4003 19.1998H12.7951Z"
                                        fill="white"/>
                                    <path
                                        d="M10.4 6.39986H16.8C17.0209 6.39986 17.2 6.22077 17.2 5.99985C17.2 5.77894 17.0209 5.59985 16.8 5.59985H10.4C10.1791 5.59985 10 5.77894 10 5.99985C10 6.22077 10.1791 6.39986 10.4 6.39986Z"
                                        fill="white"/>
                                    <path
                                        d="M22 8.80005C21.7791 8.80005 21.6 8.97914 21.6 9.20005V14.8001C21.6 15.021 21.7791 15.2001 22 15.2001C22.2209 15.2001 22.4 15.021 22.4 14.8001V9.20005C22.4 8.97914 22.2209 8.80005 22 8.80005Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Contacts
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={s.navbar__contacts}>
                <img src="#" alt="avatar"/>
                <div>
                    <p>Victoria</p>
                    <p>lineviktoriya@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;