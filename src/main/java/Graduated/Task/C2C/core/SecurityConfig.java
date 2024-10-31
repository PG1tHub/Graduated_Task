package Graduated.Task.C2C.core;



import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    @Value("${jwt.token.secret}")
    private String secretKey;
    private final JwtTokenUtil jwtTokenUtil;
    private final RedisConfig redisConfig;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .httpBasic(AbstractHttpConfigurer::disable) // UI 인증 비활성화
                .csrf(AbstractHttpConfigurer::disable) // CSRF 보호 비활성화
                .cors(Customizer.withDefaults()) // CORS 설정 활성화
                .authorizeHttpRequests(requests -> requests
                        .requestMatchers(HttpMethod.POST).permitAll()   // POST 허용
                        .requestMatchers(HttpMethod.GET).permitAll()    // GET 허용
                        .requestMatchers(HttpMethod.DELETE).permitAll() // DELETE 허용
                        .requestMatchers(HttpMethod.PATCH).permitAll()  // PATCH 허용
                )
                .sessionManagement(sessionManagement ->
                        sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Stateless 세션
                )
                .addFilterBefore(new JwtFilter(jwtTokenUtil, redisConfig),
                        UsernamePasswordAuthenticationFilter.class); // JWT 필터 추가

        return http.build();
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000")); // 허용할 도메인 설정
        configuration.setAllowedMethods(List.of("GET", "POST", "DELETE", "PATCH")); // 허용할 HTTP 메서드 설정
        configuration.setAllowedHeaders(List.of("*")); // 모든 헤더 허용
        configuration.setAllowCredentials(true); // 인증 정보를 포함한 요청 허용
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}